import React from 'react'
import { useSelector } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const user = useSelector(state => state.user)

  const isAuthenticated = !!user.username

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? children : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute