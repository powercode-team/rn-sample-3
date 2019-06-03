import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollView, View, Text, Dimensions } from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import styles from './styles';

class LoanApplication extends Component {
  static propTypes = {
    history: propTypes.object.isRequired,
  };

  state = {
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

  navigateToRate = () => {
    this.props.history.push('/user-rate');
  };

  render() {
    const { isSmallScreen } = this.state;

    return (
      <View style={[styles.container, {}]}>
        <Header title="Loan Application" />
        <ScrollView
          contentContainerStyle={[
            styles.wrapper,
            {
              paddingHorizontal: isSmallScreen ? 20 : 50,
              paddingVertical: isSmallScreen ? 20 : 50,
            },
          ]}
        >
          <View style={[styles.content, { alignItems: isSmallScreen ? 'center' : 'flex-start' }]}>
            <Card style={[styles.wrapperBlock, { maxWidth: isSmallScreen ? 350 : 'auto' }]}>
              <Text style={styles.sectionTitle}>Salary for last 3 months ($)</Text>
              <View
                style={[styles.wrapperFields, { flexDirection: isSmallScreen ? 'column' : 'row' }]}
              >
                <InputField
                  keyboardType="numeric"
                  placeholder="Month 1"
                  style={[
                    styles.inputField,
                    { marginRight: isSmallScreen ? 0 : 50, width: isSmallScreen ? '100%' : 250 },
                  ]}
                />
                <InputField
                  keyboardType="numeric"
                  placeholder="Month 2"
                  style={[
                    styles.inputField,
                    { marginRight: isSmallScreen ? 0 : 50, width: isSmallScreen ? '100%' : 250 },
                  ]}
                />
                <InputField
                  keyboardType="numeric"
                  placeholder="Month 3"
                  style={[
                    styles.inputField,
                    { marginRight: isSmallScreen ? 0 : 50, width: isSmallScreen ? '100%' : 250 },
                  ]}
                />
              </View>
            </Card>
            <Card style={[styles.wrapperBlock, { maxWidth: isSmallScreen ? 350 : 'auto' }]}>
              <Text style={styles.sectionTitle}>Monthly Expenses ($)</Text>
              <InputField
                keyboardType="numeric"
                placeholder=""
                style={[styles.inputField, { width: isSmallScreen ? '100%' : 250 }]}
              />
            </Card>
            <View style={styles.wrapperButton}>
              <Button
                text="next"
                handler={this.navigateToRate}
                containerStyles={[styles.button, { maxWidth: isSmallScreen ? 350 : 250 }]}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LoanApplication;
