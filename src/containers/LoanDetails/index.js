import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollView, View, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import { updateUserAction } from '../../store/actions';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Picker from '../../components/Picker';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import BooleanSelect from '../../components/BooleanSelect';
import SectionTitle from '../../components/SectionTitle';

import { QUALIFICATIONS_AND_EMPLOYMENT } from '../../utils/validation/formNames';
import validate from '../../utils/validation';
import { filterEmptyKeyInObject } from '../../utils/filterEmptyKeyInObject';

import {
  loanPurposes,
  typesOfLoan,
  typesOfAsset,
  typesOfSecurity,
} from '../../constants/pickers/loanDetails';

import styles from './styles';

class LoanDetails extends Component {
  static propTypes = {
    // history: propTypes.object.isRequired,
    updateUser: propTypes.func.isRequired,
    userId: propTypes.string.isRequired,
  };

  PICKER_VALUE_FOR_ADDITIONAL_FILED = 'Others';

  state = {
    loanPurpose: '',
    loanPurposeErr: false,
    loanPurposeCustom: '',
    loanObligation: true,
    typeOfLoan: '',
    typeOfLoanCustom: '',
    amountOutstanding: '',
    otherAssets: true,
    typeOfAsset: '',
    estimatedAssetValue: '',
    surety: true,
    suretyInfo: '',
    security: true,
    typeOfSecurity: '',
    typeOfSecurityCustom: '',
    estimatedSecurity: '',
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

  setValue = (pickerName, value) => {
    this.setState(prevState => {
      const errName = `${pickerName}Err`;
      if (prevState[errName]) {
        return { [pickerName]: value, [errName]: false };
      }
      return { [pickerName]: value };
    });
  };

  validateFormFiled = (fieldName, value) =>
    validate(QUALIFICATIONS_AND_EMPLOYMENT, fieldName, value);

  onSubmit = () => {
    if (this.validate()) {
      this.setState({ isLoading: true });
      const {
        loanPurpose,
        loanPurposeCustom,
        loanObligation,
        typeOfLoan,
        typeOfLoanCustom,
        amountOutstanding,
        otherAssets,
        typeOfAsset,
        estimatedAssetValue,
        surety,
        suretyInfo,
        security,
        typeOfSecurity,
        typeOfSecurityCustom,
        estimatedSecurity,
      } = this.state;

      const data = {
        loanPurpose:
          loanPurpose === this.PICKER_VALUE_FOR_ADDITIONAL_FILED ? loanPurposeCustom : loanPurpose,
        otherLoanObligation: loanObligation,
        otherLoanTypeOfLoan:
          typeOfLoan === this.PICKER_VALUE_FOR_ADDITIONAL_FILED ? typeOfLoanCustom : typeOfLoan,
        otherLoanAmount: amountOutstanding,
        otherAssets,
        otherAssetsTypeOfLoan: typeOfAsset,
        otherAssetsEstimated: estimatedAssetValue,
        suretyOrGuarantor: Boolean(surety),
        suretyOrGuarantorInfo: suretyInfo,
        security,
        typeOfSecurity:
          typeOfSecurity === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
            ? typeOfSecurityCustom
            : typeOfSecurity,
        securityEstimated: estimatedSecurity,
      };

      const clearData = filterEmptyKeyInObject(data);

      this.props.updateUser(
        this.props.userId,
        clearData,
        () => {
          this.setState({ isLoading: false });
        },
        true,
        true
      );
    }
  };

  validate = () => {
    const { loanPurpose, loanPurposeCustom } = this.state;

    let valid = true;
    let errors = {};

    if (
      !loanPurpose ||
      (loanPurpose === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !loanPurposeCustom)
    ) {
      valid = false;
      errors = { ...errors, loanPurposeErr: true };
    }

    if (!valid) {
      this.setState(errors);
    }

    return valid;
  };

  onChangeBooleanSelect = (stateName, state) => {
    this.setState({ [stateName]: state });
  };

  render() {
    const {
      isSmallScreen,
      loanPurpose,
      loanPurposeErr,
      loanPurposeCustom,
      loanObligation,
      typeOfLoan,
      typeOfLoanCustom,
      amountOutstanding,
      otherAssets,
      typeOfAsset,
      estimatedAssetValue,
      surety,
      suretyInfo,
      security,
      typeOfSecurity,
      typeOfSecurityCustom,
      estimatedSecurity,
      isLoading,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Loan Details" />
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
              <SectionTitle title="Loan purpose" />
              <Picker
                items={loanPurposes}
                value={loanPurpose}
                onChange={value => this.setValue('loanPurpose', value)}
                placeholder="Loan purpose"
                error={loanPurposeErr && loanPurpose !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED}
                style={styles.input}
              />

              {loanPurpose === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
                <InputField
                  value={loanPurposeCustom}
                  onChangeText={value => this.setValue('loanPurposeCustom', value)}
                  placeholder="Enter Your Loan purpose"
                  error={loanPurposeErr && !loanPurposeCustom}
                  style={styles.input}
                />
              )}
            </Card>
            <Card style={styles.card}>
              <SectionTitle title="Other loan obligations" />
              <BooleanSelect
                state={loanObligation}
                onChange={state => this.onChangeBooleanSelect('loanObligation', state)}
                containerStyles={styles.booleanSelect}
              />

              {loanObligation && (
                <View>
                  <Picker
                    items={typesOfLoan}
                    value={typeOfLoan}
                    onChange={value => this.setValue('typeOfLoan', value)}
                    placeholder="Type of loan"
                    style={styles.input}
                  />

                  {typeOfLoan === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
                    <InputField
                      value={typeOfLoanCustom}
                      onChangeText={value => this.setValue('typeOfLoanCustom', value)}
                      placeholder="Enter Your Type of loan"
                      style={styles.input}
                    />
                  )}

                  <InputField
                    value={amountOutstanding}
                    onChangeText={value => this.setValue('amountOutstanding', value)}
                    placeholder="Amount outstanding for each type selected"
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
              )}
            </Card>
            <Card style={styles.card}>
              <SectionTitle title="Other assets" />
              <BooleanSelect
                state={otherAssets}
                onChange={state => this.onChangeBooleanSelect('otherAssets', state)}
                containerStyles={styles.booleanSelect}
              />
              {otherAssets && (
                <View>
                  <Picker
                    items={typesOfAsset}
                    value={typeOfAsset}
                    onChange={value => this.setValue('typeOfAsset', value)}
                    placeholder="Type of loan"
                    style={styles.input}
                  />

                  <InputField
                    value={estimatedAssetValue}
                    onChangeText={value => this.setValue('estimatedAssetValue', value)}
                    placeholder="Estimated value of each asset type selected"
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
              )}
            </Card>
            <Card style={styles.card}>
              <SectionTitle title="Surety/Guarantor" />
              <BooleanSelect
                state={surety}
                onChange={state => this.onChangeBooleanSelect('surety', state)}
                containerStyles={styles.booleanSelect}
              />

              {surety && (
                <InputField
                  value={suretyInfo}
                  onChangeText={value => this.setValue('suretyInfo', value)}
                  placeholder="Enter information on Surety/ Guarantor – all of the above except (xvi)"
                  style={styles.textarea}
                  multiline
                />
              )}
            </Card>
            <Card style={styles.card}>
              <SectionTitle title="Security" />
              <BooleanSelect
                state={security}
                onChange={state => this.onChangeBooleanSelect('security', state)}
                containerStyles={styles.booleanSelect}
              />

              {security && (
                <View>
                  <Picker
                    items={typesOfSecurity}
                    value={typeOfSecurity}
                    onChange={value => this.setValue('typeOfSecurity', value)}
                    placeholder="Type of security"
                    style={styles.input}
                  />

                  {typeOfSecurity === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
                    <InputField
                      value={typeOfSecurityCustom}
                      onChangeText={value => this.setValue('typeOfSecurityCustom', value)}
                      placeholder="Enter Your Type of Security"
                      style={styles.input}
                    />
                  )}

                  <InputField
                    value={estimatedSecurity}
                    onChangeText={value => this.setValue('estimatedSecurity', value)}
                    placeholder="Estimated value of each type of security selected"
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
              )}
            </Card>
            <Button text="next" handler={this.onSubmit} isLoading={isLoading} />
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
)(LoanDetails);
