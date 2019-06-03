import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text } from 'react-native';

import MainWrapper from '../../components/MainWrapper';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import styles from './styles';

class LoanApplication extends Component {
  static propTypes = {
    navigation: propTypes.object.isRequired,
  };

  state = {};

  navigateToRate = () => {
    this.props.navigation.navigate('UserRate');
  };

  render() {
    return (
      <MainWrapper>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>Salary for last 3 months ($)</Text>
            <View style={styles.wrapperSalary}>
              <InputField keyboardType="numeric" placeholder="Month 1" style={styles.inputField} />
              <InputField keyboardType="numeric" placeholder="Month 2" style={styles.inputField} />
              <InputField keyboardType="numeric" placeholder="Month 3" style={styles.inputField} />
            </View>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>Monthly Expenses ($)</Text>
            <InputField keyboardType="numeric" placeholder="" style={styles.inputField} />
          </Card>
        </View>

        <Button text="next" handler={this.navigateToRate} containerStyles={styles.button} />
      </MainWrapper>
    );
  }
}

export default LoanApplication;
