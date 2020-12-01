import React from 'react';

import logo from '../../../assets/Images/logo.png'

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt=""/>
        {children}
      </Content>
    </Wrapper>
  );
}
