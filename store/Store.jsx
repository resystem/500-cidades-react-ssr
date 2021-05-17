import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();


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
