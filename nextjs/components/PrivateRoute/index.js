import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function PrivateRoute({ children }) {
  const router = useRouter()
  const user = useSelector(state => state.user)
  const isAuthenticated = !!user.username

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated])

  return isAuthenticated ? children : null
}

export const createPrivatePage = (Component) => {
  const Wrapped = props => <PrivateRoute><Component {...props} /></PrivateRoute>
  hoistNonReactStatics(Wrapped, Component)
  return Wrapped
}

export default PrivateRoute