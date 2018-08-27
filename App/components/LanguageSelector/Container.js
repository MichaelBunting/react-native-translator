import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LanguageSelector from './index';
import { setFromLang, setToLang } from './actions';

class LangugeSelectorContainer extends Component {
  static propTypes = {
    languages: PropTypes.objectOf(PropTypes.string).isRequired,
    setLang: PropTypes.func.isRequired,
  }

  state = {
    formattedLanguages: [{
      en: 'English',
    }],
  }

  componentDidUpdate(prevProps) {
    const { languages } = this.props;

    if (prevProps.languages !== languages && Object.keys(languages).length > 0) {
      this.formatLanguages();
    }
  }

  setFromLang = (language) => {
    const { setLang } = this.props;

    setLang(language, 'from');
  }

  setToLang = (language) => {
    const { setLang } = this.props;

    setLang(language, 'to');
  }

  formatLanguages() {
    const { languages } = this.props;
    const formattedLanguages = Object.values(languages).map(language => ({
      value: language,
    }));

    this.setState({
      formattedLanguages,
    });
  }

  render() {
    const { formattedLanguages } = this.state;

    return (
      <LanguageSelector
        languages={formattedLanguages}
        setFromLang={this.setFromLang}
        setToLang={this.setToLang}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { languages } = state.homeReducer;

  return {
    languages,
  };
};

const mapDispatchToProps = dispatch => ({
  setLang: (language, type) => {
    if (type === 'from') {
      dispatch(setFromLang({
        language,
      }));
    } else {
      dispatch(setToLang({
        language,
      }));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LangugeSelectorContainer);
