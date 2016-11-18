const SET_METADATA = 'SET_METADATA';

function setMetadata(payload) {
  return {
    payload,
    type: SET_METADATA,
  };
}

export {
  SET_METADATA,
  setMetadata,
};
