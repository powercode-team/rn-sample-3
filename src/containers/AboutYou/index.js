import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollView, View, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import { updateUserAction } from '../../store/actions';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Picker from '../../components/Picker';
import SectionsTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import BooleanSelect from '../../components/BooleanSelect';

import genderPicker from '../../constants/pickers/gender';
import racePicker from '../../constants/pickers/race';
import maritalStatuses from '../../constants/pickers/maritalStatuses';
import { employmentStatuses } from '../../constants/pickers/personalInformationValues';
import { ABOUT_YOU } from '../../utils/validation/formNames';
import validate from '../../utils/validation';

import styles from './styles';

class AboutYou extends Component {
  static propTypes = {
    history: propTypes.object.isRequired,
    updateUser: propTypes.func.isRequired,
    userId: propTypes.string.isRequired,
  };

  PICKER_VALUE_FOR_ADDITIONAL_FILED = 'Others';

  PICKER_VALUE_MARRIED = 'Married';

  state = {
    gender: '',
    race: '',
    raceCustom: '',
    dependents: '',
    dependentsErr: false,
    spouseIsEmployed: true,
    maritalStatus: '',
    maritalStatusCustom: '',
    employmentType: '',
    employmentTypeErr: false,
    employmentTypeCustom: '',
    monthlyIncome: '',
    monthlyIncomeErr: false,
    isSmallScreen: Dimensions.get('window').width < 1024,
    isLoading: false,
  };

  componentDidMount() {
    Dimensions.addEventListener('change', ({ window }) => this.setScreenSize(window.width));
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.setScreenSize);
  }

  setScreenSize = width => {
    this.setState({ isSmallScreen: width < 1024 });
  };

  submit = () => {
    if (this.validate()) {
      this.setState({ isLoading: true });
      const {
        gender,
        race,
        raceCustom,
        dependents,
        spouseIsEmployed,
        maritalStatus,
        maritalStatusCustom,
        employmentType,
        employmentTypeCustom,
        monthlyIncome,
      } = this.state;

      const raceValue = race && race.length ? race : null;
      const maritalStatusValue = maritalStatus && maritalStatus.length ? maritalStatus : null;

      let spouseInfoValue = null;

      if (maritalStatus === this.PICKER_VALUE_MARRIED) {
        let employmentTypeValue = null;
        if (spouseIsEmployed) {
          employmentTypeValue =
            employmentType === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? employmentTypeCustom
              : employmentType;
        }

        spouseInfoValue = {
          isEmployed: spouseIsEmployed,
          employmentType: employmentTypeValue,
          monthlyIncomingFor3PastMonth: Number(monthlyIncome),
        };
      }

      this.props.updateUser(
        this.props.userId,
        {
          gender: gender && gender.length ? gender : null,
          race: raceValue === this.PICKER_VALUE_FOR_ADDITIONAL_FILED ? raceCustom : raceValue,
          maritalStatus:
            maritalStatusValue === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? maritalStatusCustom
              : maritalStatusValue,
          spouseInfo: spouseInfoValue,
          noOfDependents: Number(dependents),
        },
        () => {
          this.setState({ isLoading: false });
          this.props.history.push('/housing-information');
        },
        true
      );
    }
  };

  validateFormFiled = (fieldName, value) => validate(ABOUT_YOU, fieldName, value);

  setValue = (name, value) => {
    this.setState(prevState => {
      const errName = `${name}Err`;
      if (prevState[errName]) {
        return { [name]: value, [errName]: false };
      }
      return { [name]: value };
    });
  };

  validate = () => {
    const {
      dependents,
      maritalStatus,
      spouseIsEmployed,
      employmentType,
      employmentTypeCustom,
      monthlyIncome,
    } = this.state;

    let valid = true;
    let errors = {};

    const dependentsErr = this.validateFormFiled('dependents', dependents);

    if (dependentsErr) {
      valid = false;
      errors = { ...errors, dependentsErr };
    }

    if (maritalStatus === this.PICKER_VALUE_MARRIED && spouseIsEmployed) {
      if (
        !employmentType ||
        (employmentType === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !employmentTypeCustom)
      ) {
        valid = false;
        errors = { ...errors, employmentTypeErr: true };
      }

      const monthlyIncomeErr = this.validateFormFiled('monthlyIncome', monthlyIncome);

      if (dependentsErr) {
        valid = false;
        errors = { ...errors, monthlyIncomeErr };
      }
    }

    if (!valid) {
      this.setState(errors);
    }

    return valid;
  };

  spouseEmployedChange = state => {
    this.setState({ spouseIsEmployed: state });
  };

  render() {
    const {
      isSmallScreen,
      gender,
      race,
      raceCustom,
      dependents,
      dependentsErr,
      spouseIsEmployed,
      maritalStatus,
      maritalStatusCustom,
      employmentType,
      employmentTypeErr,
      employmentTypeCustom,
      monthlyIncome,
      monthlyIncomeErr,
      isLoading,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="About You" />
        <ScrollView
          contentContainerStyle={[
            styles.wrapper,
            { flexDirection: isSmallScreen ? 'column' : 'row' },
          ]}
        >
          <View
            style={[
              styles.block,
              { minWidth: isSmallScreen ? 'auto' : 650, paddingHorizontal: isSmallScreen ? 0 : 50 },
            ]}
          >
            <Card style={styles.card}>
              <SectionsTitle title="Tell us more about you" />
              <Picker
                items={genderPicker}
                value={gender}
                onChange={value => this.setValue('gender', value)}
                placeholder="Gender"
                style={styles.input}
              />
              <Picker
                items={racePicker}
                value={race}
                onChange={value => this.setValue('race', value)}
                placeholder="Race"
                style={styles.input}
              />
              {race === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
                <InputField
                  value={raceCustom}
                  onChangeText={value => this.setValue('raceCustom', value)}
                  placeholder="Enter Your Race"
                  style={styles.input}
                />
              )}

              <Picker
                items={maritalStatuses}
                value={maritalStatus}
                onChange={value => this.setValue('maritalStatus', value)}
                placeholder="Marital Status"
                style={styles.input}
              />

              {maritalStatus === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
                <InputField
                  value={maritalStatusCustom}
                  onChangeText={value => this.setValue('raceCustom', value)}
                  placeholder="Enter You Marital Status"
                  style={styles.input}
                />
              )}

              {maritalStatus === this.PICKER_VALUE_MARRIED && (
                <BooleanSelect
                  state={spouseIsEmployed}
                  onChange={this.spouseEmployedChange}
                  labelText="Is spouse employed?"
                  containerStyles={styles.wrapperPersonCheckbox}
                />
              )}

              {maritalStatus === this.PICKER_VALUE_MARRIED && spouseIsEmployed && (
                <View>
                  <Picker
                    items={employmentStatuses}
                    value={employmentType}
                    onChange={value => this.setValue('employmentType', value)}
                    placeholder="Employment Type"
                    style={styles.input}
                    error={
                      employmentTypeErr && employmentType !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED
                    }
                  />

                  {employmentType === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
                    <InputField
                      value={employmentTypeCustom}
                      onChangeText={value => this.setValue('employmentTypeCustom', value)}
                      placeholder="Enter Him Employment Type"
                      error={employmentTypeErr && !employmentTypeCustom}
                      style={styles.input}
                    />
                  )}

                  <InputField
                    value={monthlyIncome}
                    onChangeText={value => this.setValue('monthlyIncome', value)}
                    keyboardType="numeric"
                    placeholder="Monthly income for past 3 months"
                    style={styles.input}
                    error={monthlyIncomeErr}
                  />
                </View>
              )}

              <InputField
                value={dependents}
                onChangeText={value => this.setValue('dependents', value)}
                keyboardType="numeric"
                placeholder="No. of dependents"
                style={styles.input}
                error={dependentsErr}
              />
            </Card>
            <Button text="next" handler={this.submit} isLoading={isLoading} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userId: user.userId,
});

const mapDispatchToProps = {
  updateUser: updateUserAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutYou);
