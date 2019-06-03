import React, { Component } from 'react';
import propTypes from 'prop-types';

import MainWrapper from '../../components/MainWrapper';
import Card from '../../components/Card';
import SectionTitle from '../../components/SectionTitle';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

import CalculatedTable from '../../components/UserRate/CalculatedTable';

import styles from './styles';

class UserRate extends Component {
  static propTypes = {
    navigation: propTypes.object.isRequired,
  };

  state = {
    monthlyRepayment: 912.05,
    processingFree: 800,
    disbursementAmount: 9200,
    interestedRate: 0.79,
  };

  onPressInterested = () => {
    console.log('onPressInterested');
  };

  goToPersonalInfo = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const { monthlyRepayment, processingFree, disbursementAmount, interestedRate } = this.state;

    return (
      <MainWrapper>
        <Card style={styles.card}>
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
        <Card style={styles.wrapperTable}>
          <CalculatedTable
            monthlyRepayment={monthlyRepayment}
            processingFree={processingFree}
            disbursementAmount={disbursementAmount}
            interestedRate={interestedRate}
          />
        </Card>
        <Button handler={this.goToPersonalInfo} text="next" />
      </MainWrapper>
    );
  }
}

export default UserRate;
