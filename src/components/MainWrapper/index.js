import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import { gradient } from '../../constants/style';

import styles from './styles';

class MainWrapperComponent extends Component {
  static propTypes = {
    children: propTypes.node.isRequired,
  };

  DEFAULT_GRADIENT_HEIGHT = 120;

  state = {
    height: this.DEFAULT_GRADIENT_HEIGHT,
  };

  onScroll = event => {
    const calculatedHeight = event.nativeEvent.contentOffset.y * -1 + this.DEFAULT_GRADIENT_HEIGHT;
    const height = calculatedHeight < 0 ? 0 : calculatedHeight;

    this.setState({ height });
  };

  render() {
    const { children } = this.props;
    const { height } = this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.wrapperGradient, { height }]}>
          <LinearGradient
            colors={[gradient.componentBg.from, gradient.componentBg.to]}
            style={styles.linearGradient}
          />
        </View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={this.onScroll}
          contentContainerStyle={styles.wrapper}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

export default MainWrapperComponent;
