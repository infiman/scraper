import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../shared/actions';

class Website extends React.Component {
  static propTypes = {
    websiteContents: React.PropTypes.object.isRequired,
  };

  get list() {
    const { entities } = this.props.websiteContents;
    return entities.map((item, i) => <section key={i}>TYPE: {item.content_type}<br />{item.content}</section>);
  }

  fetchData() {
    this.props.fetchWebsiteContent({ id: this.props.params.id });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { isFetching } = this.props.websiteContents;

    return (
      <section>
        <Link to="/">Back</Link>
        <br />
        Is fetching: {isFetching.toString()}
        <br />
        <br />
        {this.list}
      </section>
    );
  }
}

function mapStateToProps({ websiteContents }) {
  return { websiteContents };
}

function mapDispatchToProps(dispatch) {
  const { fetchWebsiteContent } = actions;
  return bindActionCreators({ fetchWebsiteContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Website);
