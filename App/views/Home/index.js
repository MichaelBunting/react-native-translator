import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import LanguageSelector from '../../components/LanguageSelector';
import LanguageField from '../../components/LanguageField';

import { getData } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Home extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <LanguageSelector />
        <View style={styles.container}>
          <LanguageField />
          <LanguageField
            editable={false}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, languages } = state.homeReducer;

  return {
    isLoading,
    languages,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => { dispatch(getData()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
