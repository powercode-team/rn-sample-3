import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { LinearGradient } from 'expo';
import LoanCalculator from '../containers/LoanCalculator';
import LoanApplication from '../containers/LoanApplication';
import UserRate from '../containers/UserRate';
import PersonalInformation from '../containers/PersonalInformation';
import SignUp from '../containers/SignUp';
import HousingInformation from '../containers/HousingInformation';
import AboutYou from '../containers/AboutYou';
import QualificationsAndEmployment from '../containers/QualificationsAndEmployment';
import LoanDetails from '../containers/LoanDetails';
import CoremetrixScreen from '../containers/Coremetrix';

import HeaderBackIcon from '../components/HeaderBackIcon';

import { colors, gradient } from '../constants/style';

import fonts from '../constants/fontNames';

const routes = {
  LoanCalculator: {
    screen: LoanCalculator,
    navigationOptions: {
      title: 'Loan Calculator',
    },
  },
  LoanApplication: {
    screen: LoanApplication,
    navigationOptions: {
      title: 'Loan Application',
    },
  },
  UserRate: {
    screen: UserRate,
    navigationOptions: {
      title: 'User Rate',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
    },
  },
  PersonalInformation: {
    screen: PersonalInformation,
    navigationOptions: {
      title: 'Personal Information',
    },
  },
  AboutYou: {
    screen: AboutYou,
    navigationOptions: {
      title: 'About you',
    },
  },
  HousingInformation: {
    screen: HousingInformation,
    navigationOptions: {
      title: 'Housing Information',
    },
  },
  QualificationsAndEmployment: {
    screen: QualificationsAndEmployment,
    navigationOptions: {
      title: 'Qualifications and Employment',
    },
  },
  LoanDetails: {
    screen: LoanDetails,
    navigationOptions: {
      title: 'Loan Details',
    },
  },
  CoremetrixScreen: {
    screen: CoremetrixScreen,
    navigationOptions: {
      title: 'Coremetrix',
    },
  },
};

export const config = {
  initialRouteName: 'LoanCalculator',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fb974d',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: fonts.TTNorms.medium,
      fontSize: 22,
      color: colors.white,
    },
    headerBackTitle: null,
    headerBackImage: HeaderBackIcon,
    headerBackground: (
      <LinearGradient
        colors={[gradient.header.from, gradient.header.to]}
        style={{ height: '100%' }}
      />
    ),
  },
  cardStyle: {
    backgroundColor: colors.background,
  },
  headerMode: 'screen',
};

export default createAppContainer(createStackNavigator(routes, config));
