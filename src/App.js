import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from 'store/configureStore';
import {HashRouter as Router} from 'react-router-dom';
import Routing from 'routing/routing'
import ResizeManager from 'managers/ResizeManager';
import Internationalization from 'intl/IntlManager';

const App = React.memo(() =>
    <ReduxProvider store={store}>
      <Internationalization>
        <ResizeManager>
          <Router>
            <Routing/>
          </Router>
        </ResizeManager>
      </Internationalization>
    </ReduxProvider>);

export default App;
