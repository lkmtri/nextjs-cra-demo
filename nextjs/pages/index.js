import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { actions } from '../store'

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const onFinish = ({ username }) => {
    dispatch(actions.login({ username }));
    setTimeout(() => router.push('/user'))
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Div>
  );
};

export default Login