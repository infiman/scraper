import React from 'react';
import { Link } from 'react-router';

const ListItem = ({ entity: { id, url } }) => {
  return (
    <Link to={`/website/${id}`}>{url}</Link>
  );
};
ListItem.propTypes = {
  entity: React.PropTypes.object.isRequired,
};

export default ListItem;
