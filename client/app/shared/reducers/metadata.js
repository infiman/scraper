import actions from '../actions';

const {
  SET_METADATA,
} = actions;

function metadata(state = {
  csrfParam: '',
  csrfToken: '',
}, {
  type,
  payload,
}) {
  switch (type) {
    case SET_METADATA:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}

export default metadata;
