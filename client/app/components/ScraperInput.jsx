import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../shared/actions';

class ScraperInput extends React.Component {
  static propTypes = {
    isScraping: React.PropTypes.bool.isRequired,
    startScrapingWebsite: React.PropTypes.func.isRequired,
  };

  state = {
    websiteUrl: 'http://guides.rubyonrails.org/index.html',
  }

  onInputChange = e => {
    this.setState({
      websiteUrl: e.target.value,
    });
  }

  onSubmitClick = (e) => {
    e.preventDefault();

    const { websiteUrl } = this.state;

    if (!websiteUrl) return;

    const { startScrapingWebsite } = this.props;

    startScrapingWebsite({ websiteUrl });
  }

  render() {
    const { websiteUrl } = this.state;
    const { isScraping } = this.props;

    return (
      <form onSubmit={this.onSubmitClick}>
        ENTER WEBSITE URL:
        <br />
        <input type="url" value={websiteUrl} onChange={this.onInputChange} disabled={isScraping} />
        <input type="submit" value="Scrape!" disabled={isScraping} />
        <span>Is scraping: {isScraping.toString()}</span>
      </form>
    );
  }
}

function mapStateToProps({ scraping: { isScraping } }) {
  return { isScraping };
}

function mapDispatchToProps(dispatch) {
  const { startScrapingWebsite } = actions;
  return bindActionCreators({ startScrapingWebsite }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScraperInput);
