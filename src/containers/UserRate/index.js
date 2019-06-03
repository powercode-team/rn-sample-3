import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollView, View, Dimensions } from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';
import SectionTitle from '../../components/SectionTitle';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

import CalculatedTable from '../../components/UserRate/CalculatedTable';

import styles from './styles';

class UserRate extends Component {
  static propTypes = {
    history: propTypes.object.isRequired,
  };

  state = {
    monthlyRepayment: 912.05,
    processingFree: 800,
    disbursementAmount: 9200,
    interestedRate: 0.79,
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

  onPressInterested = () => {
    console.log('On Press Interested');
  };

  goToPersonalInfo = () => {
    this.props.history.push('/sign-up');
  };

  render() {
    const {
      monthlyRepayment,
      processingFree,
      disbursementAmount,
      interestedRate,
      isSmallScreen,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Your Rate" />
        <ScrollView
          contentContainerStyle={[
            styles.wrapper,
            { flexDirection: isSmallScreen ? 'column' : 'row' },
          ]}
        >
          <Card
            style={[
              styles.block,
              {
                minWidth: isSmallScreen ? 'auto' : 500,
                paddingHorizontal: isSmallScreen ? 20 : 50,
                marginRight: isSmallScreen ? 0 : 20,
              },
            ]}
          >
            <SectionTitle title="Great! Your indicative rate* is" />
            <InputField
              keyboardType="numeric"
              placeholder="Interest rate (%) p.a."
              style={styles.input}
            />
            <Paragraph text="(E.I.R. xx % p.a.)" style={styles.textUnderInput} />
            <Paragraph text="*Terms and conditions apply" style={styles.termsText} />
            <Button
              handler={this.onPressInterested}
              text="Interested to get a better rate?"
              containerStyles={styles.buttonWrapper}
            />
          </Card>
          <Card
            style={[
              styles.block,
              styles.wrapperTable,
              {
                minWidth: isSmallScreen ? 'auto' : 500,
                paddingHorizontal: isSmallScreen ? 20 : 50,
              },
            ]}
          >
            <CalculatedTable
              monthlyRepayment={monthlyRepayment}
              processingFree={processingFree}
              disbursementAmount={disbursementAmount}
              interestedRate={interestedRate}
            />
            <Button handler={this.goToPersonalInfo} text="next" />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default UserRate;
