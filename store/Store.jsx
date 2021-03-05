import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  idaSDK: null,
  auth: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, auth: { ...(state.auth || {}), ...action.auth } };
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };
  const { children } = props;
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node
};

StoreProvider.defaultProps = {
  children: []
};

export default Store;
