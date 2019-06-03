import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';

import { GenAmortizationSchedule } from 'finance-logic-js';

import MainWrapper from '../../components/MainWrapper';
import BorrowingForm from '../../components/LoanCalculator/BorrowingForm';
import CalculatedForm from '../../components/LoanCalculator/CalculatedForm';
import Button from '../../components/Button';

class LoanCalculator extends Component {
  static propTypes = {
    navigation: propTypes.object.isRequired,
  };

  state = {
    loanAmountValue: '2000',
    durationValue: 1,
    durationValueForSlider: 1,
    totalCostOfLoan: 0,
    totalInterest: 0,
    monthlyCost: 0,
  };

  onLoanAmountValueChange = value => {
    this.setState({ loanAmountValue: value });
  };

  onDurationValueChange = (value, maxValue) => {
    let durationValue = value;

    if (value > 6 && maxValue) {
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
        12,
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
    this.props.navigation.navigate('LoanApplication');
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
      durationValueForSlider,
      totalCostOfLoan,
      totalInterest,
      monthlyCost,
    } = this.state;

    return (
      <MainWrapper>
        <View>
          <BorrowingForm
            loanAmountValue={loanAmountValue}
            onLoanAmountValueChange={this.onLoanAmountValueChange}
            durationValue={durationValueForSlider}
            onDurationValueChange={this.onDurationValueChange}
            normalizeAmount={this.normalizeAmount}
          />
        </View>
        <View>
          <CalculatedForm
            totalCostOfLoan={totalCostOfLoan}
            totalInterest={totalInterest}
            monthlyCost={monthlyCost}
          />
          <Button handler={this.onButtonPress} text="get your personalized rate" />
        </View>
      </MainWrapper>
    );
  }
}

export default LoanCalculator;
