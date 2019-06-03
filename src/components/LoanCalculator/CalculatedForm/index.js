import React from 'react';
import propTypes from 'prop-types';
import { View, Text } from 'react-native';

import Card from '../../Card';

import styles from './styles';

const CalculatedFormComponent = ({ monthlyCost, totalCostOfLoan, totalInterest }) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>Your Monthly Payment</Text>
    <Card>
      <View style={styles.wrapperForm}>
        <View style={styles.wrapperHeader}>
          <Text style={styles.icon}>$</Text>
          <Text style={styles.count}>
            $ {monthlyCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            <Text style={styles.month}>/Month</Text>
          </Text>
        </View>
        <View style={styles.wrapperResults}>
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Total Interest</Text>
            <Text style={styles.resultValue}>{`$ ${totalInterest.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`}</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Total Amount Payable</Text>
            <Text style={styles.resultValue}>{`$ ${totalCostOfLoan.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`}</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Interest Rate Per Month</Text>
            <Text style={styles.resultValue}>% 1.000</Text>
          </View>
        </View>
      </View>
    </Card>
  </View>
);

CalculatedFormComponent.propTypes = {
  monthlyCost: propTypes.number.isRequired,
  totalCostOfLoan: propTypes.number.isRequired,
  totalInterest: propTypes.number.isRequired,
};

export default CalculatedFormComponent;
