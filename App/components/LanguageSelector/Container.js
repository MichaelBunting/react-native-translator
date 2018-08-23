import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LanguageSelector from './index';

class LangugeSelectorContainer extends Component {
  static propTypes = {
    languages: PropTypes.objectOf(PropTypes.string).isRequired,
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

export default connect(mapStateToProps)(LangugeSelectorContainer);
