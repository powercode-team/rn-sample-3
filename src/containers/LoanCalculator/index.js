import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollView, View, Dimensions } from 'react-native';

import { GenAmortizationSchedule } from 'finance-logic-js';

import Header from '../../components/Header';
import BorrowingForm from '../../components/LoanCalculator/BorrowingForm';
import CalculatedForm from '../../components/LoanCalculator/CalculatedForm';
import Button from '../../components/Button';

import styles from './styles';

class LoanCalculator extends Component {
  static propTypes = {
    history: propTypes.object.isRequired,
  };

  state = {
    loanAmountValue: 2000,
    durationValue: 1,
    durationValueForSlider: 1,
    totalCostOfLoan: 0,
    totalInterest: 0,
    monthlyCost: 0,
    isSmallScreen: Dimensions.get('window').width < 1024,
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

  onLoanAmountValueChange = value => {
    this.setState({ loanAmountValue: value });
  };

  onDurationValueChange = (value, maxValue) => {
    let durationValue = value;

    if (value > 6 && maxValue) {
      console.log('value > 6 && maxValue');
      const diff = value - 6;
      durationValue = (diff + 1) * 6;
    }

    this.setState({ durationValueForSlider: value, durationValue }, () => {
      if (this.state.loanAmountValue) {
        this.calculateResult();
      }
    });
  };

  calculateResult = () => {
    const { loanAmountValue, durationValue } = this.state;

    if (Number(loanAmountValue)) {
      const data = GenAmortizationSchedule(
        Number(loanAmountValue),
        Number(durationValue),
        Number(durationValue),
        new Date(),
        Number(durationValue),
        new Date(),
        0
      ).schedule;

      let totalInterest = 0;

      data.forEach(row => {
        totalInterest += row.paymentToInterest;
      });

      const totalCostOfLoan = Number(loanAmountValue) + totalInterest;
      const monthlyCost = totalCostOfLoan / durationValue;

      this.setState({
        totalCostOfLoan: Number(totalCostOfLoan),
        totalInterest: Number(totalInterest),
        monthlyCost,
      });
    }
  };

  onButtonPress = () => {
    this.props.history.push({ pathname: '/loan-application' });
  };

  normalizeAmount = () => {
    if (this.state.loanAmountValue) {
      this.setState(
        prevState => ({
          loanAmountValue: String(Math.ceil(Number(prevState.loanAmountValue || 0) / 100) * 100),
        }),
        this.calculateResult
      );
    } else {
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({
      loanAmountValue: '0',
      totalCostOfLoan: 0,
      totalInterest: 0,
      monthlyCost: 0,
    });
  };

  render() {
    const {
      loanAmountValue,
      isSmallScreen,
      durationValueForSlider,
      totalCostOfLoan,
      totalInterest,
      monthlyCost,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Loan Calculator" />
        <ScrollView
          contentContainerStyle={[
            styles.wrapper,
            { flexDirection: isSmallScreen ? 'column' : 'row' },
          ]}
        >
          <View
            style={{ minWidth: isSmallScreen ? 0 : 500, paddingHorizontal: isSmallScreen ? 0 : 20 }}
          >
            <BorrowingForm
              loanAmountValue={loanAmountValue}
              onLoanAmountValueChange={this.onLoanAmountValueChange}
              durationValue={durationValueForSlider}
              onDurationValueChange={this.onDurationValueChange}
              normalizeAmount={this.normalizeAmount}
            />
          </View>
          <View style={[styles.wrapperForms, { minWidth: isSmallScreen ? 0 : 500 }]}>
            <CalculatedForm
              totalCostOfLoan={totalCostOfLoan}
              totalInterest={totalInterest}
              monthlyCost={monthlyCost}
            />
            <Button handler={this.onButtonPress} text="GET YOUR PERSONALIZED RATE" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LoanCalculator;
