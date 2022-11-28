import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { menu } from './utils/menu';
import _ from 'lodash';

const App = () => {
  return (
    <Routes>
      {
        _.map(menu, (route, i) => (
          <Route key={i} path={route.path} exact={route.exact} element={<route.element/>}/>
        ))
      }

    </Routes>
  );
};
export default App;
