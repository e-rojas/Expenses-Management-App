import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Store.css';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Expensedashboard from '../pages/ExpensesDashboard';
import Addexpense from '../pages/AddExpense';
import Editexpense from '../pages/EditExpense';
import Help from '../pages/Help';
import Notfound from '../pages/NotFound';
function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path="/" component={Expensedashboard} exact={true} />
          <Route path="/create" component={Addexpense} />
          <Route path="/edit" component={Editexpense} />
          <Route path="/help" component={Help} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
