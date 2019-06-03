import React from 'react';
import propTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const normalizeNumber = number =>
  Math.round(number).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const CalculatedTableComponent = ({
  monthlyRepayment,
  processingFree,
  disbursementAmount,
  interestedRate,
}) => (
  <View style={styles.wrapper}>
    <View style={styles.wrapperResults}>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Monthly Repayment</Text>
        <Text style={styles.resultValue}>{`$ ${normalizeNumber(monthlyRepayment)}`}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>QianNow Processing Free</Text>
        <Text style={styles.resultValue}>{`$ ${normalizeNumber(processingFree)}`}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Loan Disbursement Amount</Text>
        <Text style={styles.resultValue}>{`$ ${normalizeNumber(disbursementAmount)}`}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Interested Rate Per Month</Text>
        <Text style={styles.resultValue}>{`${interestedRate.toFixed(2)}%`}</Text>
      </View>
    </View>
  </View>
);

CalculatedTableComponent.propTypes = {
  monthlyRepayment: propTypes.number.isRequired,
  processingFree: propTypes.number.isRequired,
  disbursementAmount: propTypes.number.isRequired,
  interestedRate: propTypes.number.isRequired,
};

export default CalculatedTableComponent;
