import React from 'react';
import propTypes from 'prop-types';
import { View, Text } from 'react-native';

import Card from '../../Card';
import DurationSlider from '../DurationSlider';
import InputField from '../../InputField';

import styles from './styles';

const BorrowingFormComponent = ({
  loanAmountValue,
  onLoanAmountValueChange,
  durationValue,
  onDurationValueChange,
  normalizeAmount,
}) => (
  <View style={styles.wrapper}>
    <Card style={styles.card}>
      <Text style={styles.title}>I want to borrow</Text>
      <InputField
        value={String(loanAmountValue)}
        onChangeText={onLoanAmountValueChange}
        onBlur={normalizeAmount}
        placeholder="Loan Amount"
        keyboardType="numeric"
      />
    </Card>
    <Card style={[styles.card, styles.cardDuration]}>
      <Text style={styles.title}>For a duration of (Months)</Text>
      <View style={styles.wrapperDuration}>
        <DurationSlider value={durationValue} onChange={onDurationValueChange} />
      </View>
    </Card>
  </View>
);

BorrowingFormComponent.propTypes = {
  loanAmountValue: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onLoanAmountValueChange: propTypes.func.isRequired,
  durationValue: propTypes.number.isRequired,
  onDurationValueChange: propTypes.func.isRequired,
  normalizeAmount: propTypes.func.isRequired,
};

export default BorrowingFormComponent;
