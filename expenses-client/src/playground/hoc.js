import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p> The info is {props.info} </p>
    </div>
  );
};

const withAdminWarning = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info don't share</p>}
      <WrapperComponent {...props} />
    </div>
  );
};

const requiredAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

/* ReactDOM.render(
  <React.StrictMode>
    <AdminInfo isAdmin={true} info="these are the details" />
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(
  <React.StrictMode>
    <AuthInfo isAuthenticated={true} info="Welcome to authenticated info" />
  </React.StrictMode>,
  document.getElementById('root')
);
