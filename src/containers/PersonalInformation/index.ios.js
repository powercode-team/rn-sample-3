import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import propTypes from 'prop-types';

import { connect } from 'react-redux';

import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { updateUserAction } from '../../store/actions';

import MainWrapper from '../../components/MainWrapper';
import Card from '../../components/Card';
import Picker from '../../components/Picker';
import SectionsTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import BooleanSelect from '../../components/BooleanSelect';
import Paragraph from '../../components/Paragraph';

import { PERSONAL_INFO } from '../../utils/validation/formNames';
import validate from '../../utils/validation';
import { colors } from '../../constants/style';

import {
  highestEducationLevel,
  employmentStatuses,
  jobTitles,
  nationalityList,
} from '../../constants/pickers/personalInformationValues';

import styles from './styles';

class PersonalInformation extends Component {
  static propTypes = {
    navigation: propTypes.object.isRequired,
    updateUser: propTypes.func.isRequired,
    userId: propTypes.string.isRequired,
  };

  PICKER_VALUE_FOR_ADDITIONAL_FILED = 'Others';

  state = {
    fullName: '',
    fullNameErr: false,

    email: '',
    emailErr: false,

    number: '',
    numberErr: false,

    registrationNumber: '',
    registrationNumberErr: false,

    nationality: '',
    nationalityErr: false,
    nationalityCustomVal: '',

    educationLevel: '',
    educationLevelCustomVal: '',
    educationLevelErr: false,

    employmentStatus: '',
    employmentStatusCustomVal: '',
    employmentStatusErr: false,

    jobTitle: '',
    jobTitleCustomVal: '',
    jobTitleErr: false,

    isPEPerson: true,

    isDatePickerVisible: false,
    dateOfBirth: null,
    initialDate: new Date(),
    dateOfBirthErr: false,

    isLoading: false,
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

  handleDatePicked = date => {
    this.setState({ dateOfBirth: date.toISOString() });
    this.hideDatePicker();
  };

  onSubmit = () => {
    if (this.validate()) {
      this.setState({ isLoading: true });
      const {
        fullName,
        email,
        number,
        dateOfBirth,
        registrationNumber,
        nationality,
        nationalityCustomVal,
        isPEPerson,
        educationLevel,
        educationLevelCustomVal,
        employmentStatus,
        employmentStatusCustomVal,
        jobTitle,
        jobTitleCustomVal,
      } = this.state;

      this.props.updateUser(
        this.props.userId,
        {
          fullName,
          email,
          contactNumber: Number(number),
          dateOfBirth,
          NRICFINnumber: Number(registrationNumber),
          nationality:
            nationality === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? nationalityCustomVal
              : nationality,
          isPEPerson,
          highestEducationLevel:
            educationLevel === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? educationLevelCustomVal
              : educationLevel,
          employmentStatus:
            employmentStatus === this.PICKER_VALUE_FOR_ADDITIONAL_FILED
              ? employmentStatusCustomVal
              : employmentStatus,
          jobTitle:
            jobTitle === this.PICKER_VALUE_FOR_ADDITIONAL_FILED ? jobTitleCustomVal : jobTitle,
        },
        () => {
          this.setState({ isLoading: false });
          this.props.navigation.navigate('AboutYou');
        },
        true
      );
    }
  };

  validate = () => {
    const {
      educationLevel,
      educationLevelCustomVal,
      employmentStatus,
      employmentStatusCustomVal,
      jobTitle,
      jobTitleCustomVal,
      nationality,
      nationalityCustomVal,
      dateOfBirth,
      fullName,
      email,
      number,
      registrationNumber,
    } = this.state;

    let valid = true;
    let errors = {};

    const fullNameErr = this.validateFormFiled('fullName', fullName);
    const emailErr = this.validateFormFiled('email', email);
    const numberErr = this.validateFormFiled('number', number);
    const registrationNumberErr = this.validateFormFiled('registrationNumber', registrationNumber);

    if (fullNameErr || emailErr || numberErr || registrationNumberErr) {
      valid = false;
      errors = { ...errors, fullNameErr, emailErr, numberErr, registrationNumberErr };
    }

    if (
      !educationLevel ||
      (educationLevel === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !educationLevelCustomVal)
    ) {
      valid = false;
      errors = { ...errors, educationLevelErr: true };
    }

    if (
      !employmentStatus ||
      (employmentStatus === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !employmentStatusCustomVal)
    ) {
      valid = false;
      errors = { ...errors, employmentStatusErr: true };
    }

    if (!jobTitle || (jobTitle === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !jobTitleCustomVal)) {
      valid = false;
      errors = { ...errors, jobTitleErr: true };
    }

    if (
      !nationality ||
      (nationality === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && !nationalityCustomVal)
    ) {
      valid = false;
      errors = { ...errors, nationalityErr: true };
    }

    if (!dateOfBirth) {
      valid = false;
      errors = { ...errors, dateOfBirthErr: true };
    }

    if (!valid) {
      this.setState(errors);
    }

    return valid;
  };

  validateFormFiled = (fieldName, value) => validate(PERSONAL_INFO, fieldName, value);

  onPEPersonChange = state => {
    this.setState({ isPEPerson: state });
  };

  onPressDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false, dateOfBirthErr: false });
  };

  onChangeDatePicked = () => {
    console.log('onChangeDatePicked');
  };

  render() {
    const {
      educationLevel,
      employmentStatus,
      jobTitle,
      educationLevelCustomVal,
      employmentStatusCustomVal,
      jobTitleCustomVal,
      educationLevelErr,
      employmentStatusErr,
      jobTitleErr,
      fullName,
      fullNameErr,
      email,
      emailErr,
      number,
      numberErr,
      registrationNumber,
      registrationNumberErr,
      nationality,
      nationalityErr,
      nationalityCustomVal,
      isPEPerson,
      initialDate,
      dateOfBirth,
      dateOfBirthErr,
      isDatePickerVisible,
      isLoading,
    } = this.state;

    return (
      <MainWrapper>
        <Card style={styles.card}>
          <SectionsTitle title="Information" />
          <InputField
            value={fullName}
            onChangeText={value => this.setValue('fullName', value)}
            placeholder="Full name"
            error={fullNameErr}
            style={styles.input}
          />
          <InputField
            value={email}
            onChangeText={value => this.setValue('email', value)}
            placeholder="Email"
            error={emailErr}
            style={styles.input}
          />
          <InputField
            value={number}
            onChangeText={value => this.setValue('number', value)}
            placeholder="Contact number"
            error={numberErr}
            style={styles.input}
          />

          <TouchableWithoutFeedback
            style={styles.datePickerTouchable}
            onPress={this.onPressDatePicker}
          >
            <Text
              style={[
                styles.dateText,
                { color: dateOfBirth ? colors.black : colors.placeholder },
                { borderColor: dateOfBirthErr ? colors.error : colors.borderGrey },
              ]}
            >
              {dateOfBirth ? moment(dateOfBirth).format('DD.MM.GGGG') : 'Date of Birth'}
            </Text>
          </TouchableWithoutFeedback>

          <InputField
            value={registrationNumber}
            onChangeText={value => this.setValue('registrationNumber', value)}
            placeholder="NRIC/FIN number"
            error={registrationNumberErr}
            style={styles.input}
          />
          <Picker
            items={nationalityList}
            value={nationality}
            onChange={value => this.setValue('nationality', value)}
            placeholder="Nationality"
            error={nationalityErr && nationality !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED}
            style={styles.input}
          />

          {nationality === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
            <InputField
              value={nationalityCustomVal}
              onChangeText={value => this.setValue('nationalityCustomVal', value)}
              placeholder="Enter Your Nationality"
              error={nationalityErr && !nationalityCustomVal}
              style={styles.input}
            />
          )}

          <BooleanSelect
            state={isPEPerson}
            onChange={this.onPEPersonChange}
            labelText="Are you a Politically Exposed Person (PEP)* or a close associate of a PEP?"
          />
          <Paragraph
            text="*Examples of Politically Exposed Persons include: Head of State / Government, Government Ministers, Senior Civil Service, Judicial or Military Officials, Senior Executives of State Owned Corporations, Senior Political Party Officials."
            style={styles.paragraph}
          />
          <Paragraph
            text="Examples of Close Associates of PEP include: Family member (spouse, child, parents, siblings, including in-laws), closely connected persons and close business associates."
            style={styles.paragraph}
          />
        </Card>

        <Card style={styles.card}>
          <SectionsTitle title="Highest Education level" />
          <Picker
            items={highestEducationLevel}
            value={educationLevel}
            onChange={value => this.setValue('educationLevel', value)}
            placeholder="Select Your Highest Education level"
            error={educationLevelErr && educationLevel !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED}
          />

          {educationLevel === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
            <InputField
              value={educationLevelCustomVal}
              onChangeText={value => this.setValue('educationLevelCustomVal', value)}
              placeholder="Enter Your Highest Education level"
              error={educationLevelErr && !educationLevelCustomVal}
              style={styles.input}
            />
          )}
        </Card>

        <Card style={styles.card}>
          <SectionsTitle title="Employment Status" />
          <Picker
            items={employmentStatuses}
            value={employmentStatus}
            onChange={value => this.setValue('employmentStatus', value)}
            placeholder="Select Your Employment Status"
            error={
              employmentStatusErr && employmentStatus !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED
            }
          />

          {employmentStatus === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
            <InputField
              value={employmentStatusCustomVal}
              onChangeText={value => this.setValue('employmentStatusCustomVal', value)}
              placeholder="Enter Your Employment Status"
              error={employmentStatusErr && !employmentStatusCustomVal}
              style={styles.input}
            />
          )}
        </Card>

        <Card style={styles.card}>
          <SectionsTitle title="Job Title" />
          <Picker
            items={jobTitles}
            value={jobTitle}
            onChange={value => this.setValue('jobTitle', value)}
            placeholder="Select Your Job Title"
            error={jobTitleErr && jobTitle !== this.PICKER_VALUE_FOR_ADDITIONAL_FILED}
          />

          {jobTitle === this.PICKER_VALUE_FOR_ADDITIONAL_FILED && (
            <InputField
              value={jobTitleCustomVal}
              onChangeText={value => this.setValue('jobTitleCustomVal', value)}
              placeholder="Enter Your Employment Status"
              error={jobTitleErr && !jobTitleCustomVal}
              style={styles.input}
            />
          )}
        </Card>

        <Button text="next" handler={this.onSubmit} isLoading={isLoading} />

        <DateTimePicker
          isVisible={isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onChange={this.onChangeDatePicked}
          onCancel={this.hideDatePicker}
          date={initialDate}
        />
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
)(PersonalInformation);
