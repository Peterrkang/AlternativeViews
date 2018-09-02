import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <C {...props} {...rest} />}
            />
          ))}
        </Switch>
      </Fragment>
    );
  }
}

export default App;
