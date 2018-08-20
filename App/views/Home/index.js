import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';

import LanguageSelector from '../../components/LanguageSelector';
import LanguageField from '../../components/LanguageField';

import { getData } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Home extends Component {
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
  const { isLoading, language1 } = state.homeReducer;

  return {
    isLoading,
    language1,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => { dispatch(getData()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
