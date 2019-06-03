import React, { Component } from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';

import { updateUserAction } from '../../store/actions';

import MainWrapper from '../../components/MainWrapper';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Picker from '../../components/Picker';

import {
  residenceTypes,
  residentialStatuses,
} from '../../constants/pickers/housingInformationPickersValues';

import styles from './styles';

class HousingInformation extends Component {
  static propTypes = {
    navigation: propTypes.object.isRequired,
    updateUser: propTypes.func.isRequired,
    userId: propTypes.string.isRequired,
  };

  PICKER_VALUE_FOR_ADDITIONAL_FILED = 'Others';

  state = {
    nextKinInformation: '',
    nextKinInformationErr: false,
    address: '',
    addressErr: false,
    lengthOfStay: '',
    lengthOfStayErr: false,
    valueProperty: '',
    residenceType: '',
    residenceTypeErr: false,
    residenceTypeCustom: '',
    residentialStatus: '',
    residentialStatusCustom: '',
    isLoading: false,
  };

  onValueChange = (name, value) => {
    this.setState(prevState => {
      const errName = `${name}Err`;
      if (prevState[errName]) {
        return { [name]: value, [errName]: false };
      }
      return { [name]: value };
    });
  };

  submit = () => {
    if (this.validation()) {
      this.setState({ isLoading: true });

      const {
        nextKinInformation,
        address,
        lengthOfStay,
        valueProperty,
        residenceType,
        residenceTypeCustom,
        residentialStatus,
        residentialStatusCustom,
      } = this.state;

      const residentialStatusValue =
        residentialStatus && residentialStatus.length ? residentialStatus : null;

      this.props.updateUser(
        this.props.userId,
        {
          nextOfKinInformation: nextKinInformation,
          residentialAddress: address,
          residenceType:
            residenceType === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? residenceTypeCustom
              : residenceType,
          residentialStatus:
            residentialStatusValue === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? residentialStatusCustom
              : residentialStatusValue,
          lengthOfStay,
          estimatedValueOfProperty: valueProperty.length ? valueProperty : null,
        },
        () => {
          this.setState({ isLoading: false });
          this.props.navigation.navigate('QualificationsAndEmployment');
        },
        true
      );
    }
  };

  validation = () => {
    const {
      nextKinInformation,
      address,
      residenceType,
      residenceTypeCustom,
      lengthOfStay,
    } = this.state;

    let valid = true;
    let errors = {};

    if (!nextKinInformation) {
      valid = false;
      errors = { ...errors, nextKinInformationErr: true };
    }

    if (!address) {
      valid = false;
      errors = { ...errors, addressErr: true };
    }

    if (
      !residenceType ||
      (residenceType === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !residenceTypeCustom)
    ) {
      valid = false;
      errors = { ...errors, residenceTypeErr: true };
    }

    if (!lengthOfStay) {
      valid = false;
      errors = { ...errors, lengthOfStayErr: true };
    }

    if (!valid) {
      this.setState(errors);
    }

    return valid;
  };

  render() {
    const {
      nextKinInformation,
      nextKinInformationErr,
      address,
      addressErr,
      lengthOfStay,
      lengthOfStayErr,
      valueProperty,
      residenceType,
      residentialStatus,
      residenceTypeErr,
      residenceTypeCustom,
      residentialStatusCustom,
      isLoading,
    } = this.state;

    return (
      <MainWrapper>
        <Card style={styles.card}>
          <InputField
            value={nextKinInformation}
            onChangeText={value => this.onValueChange('nextKinInformation', value)}
            error={nextKinInformationErr}
            placeholder="Next of kin information"
            style={styles.input}
          />
          <InputField
            value={address}
            onChangeText={value => this.onValueChange('address', value)}
            error={addressErr}
            placeholder="Residential address"
            style={styles.input}
          />

          <Picker
            items={residenceTypes}
            value={residenceType}
            onChange={value => this.onValueChange('residenceType', value)}
            placeholder="Residence type"
            style={styles.input}
            error={residenceTypeErr && residenceType !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED}
          />

          {residenceType === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
            <InputField
              value={residenceTypeCustom}
              onChangeText={value => this.onValueChange('residenceTypeCustom', value)}
              placeholder="Enter Your Residence Type"
              error={residenceTypeErr && !residenceTypeCustom}
              style={styles.input}
            />
          )}

          <Picker
            items={residentialStatuses}
            value={residentialStatus}
            onChange={value => this.onValueChange('residentialStatus', value)}
            placeholder="Residential Status"
            style={styles.input}
          />

          {residentialStatus === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
            <InputField
              value={residentialStatusCustom}
              onChangeText={value => this.onValueChange('residenceTypeCustom', value)}
              placeholder="Enter Your Residential Status"
              style={styles.input}
            />
          )}

          <InputField
            value={lengthOfStay}
            onChangeText={value => this.onValueChange('lengthOfStay', value)}
            error={lengthOfStayErr}
            placeholder="Length of stay"
            style={styles.input}
          />
          <InputField
            value={valueProperty}
            onChangeText={value => this.onValueChange('valueProperty', value)}
            placeholder="Estimated value of property"
            style={styles.input}
          />
        </Card>
        <Button handler={this.submit} text="next" isLoading={isLoading} />
      </MainWrapper>
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
)(HousingInformation);
