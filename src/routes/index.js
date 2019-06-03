import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import LoanCalculator from '../containers/LoanCalculator';
import LoanApplication from '../containers/LoanApplication';
import UserRate from '../containers/UserRate';
import PersonalInformation from '../containers/PersonalInformation';
import SignUp from '../containers/SignUp';
import HousingInformation from '../containers/HousingInformation';
import AboutYou from '../containers/AboutYou';
import QualificationsAndEmployment from '../containers/QualificationsAndEmployment';
import LoanDetails from '../containers/LoanDetails';
import Coremetrix from '../containers/Coremetrix';

const Main = () => (
  <Switch style={{ height: '100vh' }}>
    <Route exact path="/" component={LoanCalculator} />
    <Route exact path="/loan-application" component={LoanApplication} />
    <Route exact path="/user-rate" component={UserRate} />
    <Route exact path="/sign-up" component={SignUp} />
    <Route exact path="/personal-information" component={PersonalInformation} />
    <Route exact path="/housing-information" component={HousingInformation} />
    <Route exact path="/about-you" component={AboutYou} />
    <Route exact path="/qualifications-employment" component={QualificationsAndEmployment} />
    <Route exact path="/loan-details" component={LoanDetails} />
    <Route exact path="/coremetrix" component={Coremetrix} />
  </Switch>
);

export default withRouter(Main);
