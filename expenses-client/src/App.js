import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/*  <Route path="/" component={Expensedashboard} exact={true} />
          <Route path="/create" component={Addexpense} />
          <Route path="/edit" component={Editexpense} />
          <Route path="/help" component={Help} />
          <Route component={Notfound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
