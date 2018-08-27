import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import LanguageSelectorContainer from '../../components/LanguageSelector/Container';
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
    fromLang: PropTypes.string.isRequired,
    toLang: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { fromLang, toLang } = this.props;

    return (
      <View style={styles.container}>
        <LanguageSelectorContainer />
        <View style={styles.container}>
          <LanguageField language={fromLang} />
          <LanguageField
            editable={false}
            language={toLang}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    isLoading,
    languages,
  } = state.homeReducer;
  const {
    fromLang,
    toLang,
  } = state.languageSelectorReducer;

  return {
    isLoading,
    languages,
    fromLang,
    toLang,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => { dispatch(getData()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
