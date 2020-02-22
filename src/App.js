import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from 'store/configureStore';
import {HashRouter as Router} from 'react-router-dom';
import Routing from 'routing/routing'
import ResizeManager from 'managers/ResizeManager';

const App = () =>
{
  return <ReduxProvider store={store}>
    <ResizeManager>
      <Router>
        <Routing/>
      </Router>
    </ResizeManager>
  </ReduxProvider>

};

export default App;
