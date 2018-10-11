import React from 'react';
import { Provider } from 'react-redux';
import HeaderMenu from './Header/HeaderMenu';
import MainContentContainer from './MainContent/MainContentContainer';
import store from '../store';

const MainContainer = () => (
  <Provider store={store}>
    <div>
      <HeaderMenu />
      <MainContentContainer />
    </div>
  </Provider>
);

export default MainContainer;
