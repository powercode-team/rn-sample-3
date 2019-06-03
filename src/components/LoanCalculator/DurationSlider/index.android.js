import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';

import RNRangeSlider from '../../RNRangeSlider';

import styles from './styles';

class DurationSliderComponent extends PureComponent {
  static propTypes = {
    value: propTypes.number.isRequired,
    onChange: propTypes.func.isRequired,
  };

  marks = [1, 2, 3, 4, 5, 6, 12, 18, 24];

  state = {
    sliderWith: 0,
  };

  onLayout = event => {
    const { width } = event.nativeEvent.layout;
    this.setState({ sliderWith: width });
  };

  calculateMarkPosition = (index, sliderWith, marksLength) => {
    const distance = (sliderWith - 20) / (marksLength - 1);
    if (index === 0) {
      return 0;
    }
    if (index === marksLength) {
      return distance * index;
    }

    return distance * index;
  };

  render() {
    const { value, onChange } = this.props;
    const { sliderWith } = this.state;

    return (
      <View onLayout={this.onLayout}>
        <RNRangeSlider
          value={value}
          onValueChange={val => onChange(val, this.marks.length)}
          minimumValue={1}
          maximumValue={this.marks.length}
          step={1}
        />
        <View>
          {this.marks.map((mark, i, arr) => (
            <Text
              key={mark}
              style={[
                styles.durationValues,
                { left: this.calculateMarkPosition(i, sliderWith, arr.length) + 5 },
              ]}
            >
              {mark}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

export default DurationSliderComponent;
