import React from 'react';
import propTypes from 'prop-types';

const styles = {
  wrapper: {
    width: '100vw',
    minHeight: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    backgroundImage: 'linear-gradient(#F98129, #FFB077)',
    boxShadow: '0px 10px 20px rgba(131, 134, 163, 0.3)',
  },
  title: {
    fontFamily: 'HKGrotesk-Light',
    color: '#fff',
    fontSize: '28px',
    margin: 0,
  },
};

const HeaderComponent = ({ title }) => (
  <div style={styles.wrapper}>
    <h1 style={styles.title}>{title}</h1>
  </div>
);

HeaderComponent.propTypes = {
  title: propTypes.string.isRequired,
};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
