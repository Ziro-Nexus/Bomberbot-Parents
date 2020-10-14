import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../pages/PagesHome';
import Login from '../../pages/PagesLogin';
import Children from '../../pages/PagesChildrens';
import Progress from '../../pages/PagesProgress';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/index" component={Home} />
          <Route exact path="/loginParents" component={Login} />
          <Route exact path="/homeParents" component={Children} />
          <Route exact path="/progressChildren" component={Progress} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;