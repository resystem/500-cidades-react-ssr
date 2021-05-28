import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const reducer = (state, action) => {
  return state
};

export const StoreProvider = (props) => {

  return <Store.Provider value={props.values}>{props.children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node
};

StoreProvider.defaultProps = {
  children: []
};

export default Store;
