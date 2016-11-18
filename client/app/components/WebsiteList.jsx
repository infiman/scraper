import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../shared/actions';
import ListItem from './ListItem';

const LIST_LENGTH = 10;

class WebsiteList extends React.Component {
  static propTypes = {
    websitePages: React.PropTypes.object.isRequired,
    fetchWebsitePages: React.PropTypes.func.isRequired,
  };

  get list() {
    const { websitePages: { entities } } = this.props;
    return entities.map((item, i) => <span key={i}><ListItem entity={item}>{item.url}</ListItem><br /></span>)
  }

  fetchData() {
    this.props.fetchWebsitePages({ count: LIST_LENGTH });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    const { isStale, isFetching } = nextProps.websitePages;
    if (isStale && !isFetching) this.fetchData();
  }

  render() {
    const { isFetching, isStale } = this.props.websitePages;

    return (
      <section>
        <br />
        WEBSITE LIST:
        <br />
        Is fetching: {isFetching.toString()}
        <br />
        Is stale: {isStale.toString()}
        <br />
        {this.list}
      </section>
    );
  }
}

function mapStateToProps({ websitePages }) {
  return { websitePages };
}

function mapDispatchToProps(dispatch) {
  const { fetchWebsitePages } = actions;
  return bindActionCreators({ fetchWebsitePages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteList);
