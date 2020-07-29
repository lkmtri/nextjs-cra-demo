import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { actions } from '../../store'

const User = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const logout = () => dispatch(actions.logout())

  return (
    <div style={{ padding: 30 }}>
      <h1>Hi, {user.username}</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default User