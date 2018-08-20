import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';

import styles from './styles';

export default class Loader extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    const { isLoading } = this.props;

    this.state = {
      renderLoader: isLoading,
      fade: new Animated.Value(1),
    };
    this.spinVal = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;

    if (prevProps.isLoading !== isLoading) {
      this.fadeInOut();
    }
  }

  fadeInOut() {
    const { isLoading } = this.props;

    const { fade } = this.state;
    const defaultAnimateOptions = {
      toValue: 0,
      duration: 500,
    };

    if (isLoading) {
      this.setState({
        renderLoader: true,
      });
      Animated.timing(fade, Object.assign(
        {},
        defaultAnimateOptions,
        { toValue: 1 },
      )).start();
    } else {
      Animated.timing(fade, defaultAnimateOptions).start(() => {
        this.setState({
          renderLoader: false,
        });
      });
    }
  }

  spin() {
    this.spinVal.setValue(0);

    Animated.timing(this.spinVal, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '1440deg'],
    });
    const { renderLoader, fade } = this.state;

    return (
      <Animated.View style={[
        styles.loaderContainer,
        {
          opacity: fade,
          display: renderLoader ? 'flex' : 'none',
        },
      ]}
      >
        {renderLoader && (
          <Animated.View
            style={[styles.loader, { transform: [{ rotate: spin }] }]}
          />
        )}
      </Animated.View>
    );
  }
}
