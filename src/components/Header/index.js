import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/Images/logo.png';
import avatarNoImage from '../../assets/Images/avatarNoImage.png'

import { Container, Content, Profile, Sidebar, SideItems } from './styles';

export default function Header() {
  const [visible, setVisible] = useState(false);

  const profile = useSelector((state) => state.user.profile);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleCloseSidebar(e) {
    if (e.target.id === 'sidebarContainer') {
      handleToggleVisible();
    }
  }

  return (
    <>
      <Container>
        <Content visible={visible}>
          <nav>
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>
            <ul>
              <li>
                <Link to="/dashboard">Ínicio</Link>
              </li>
              <li>
                <Link to="/product">Adicionar Produtos</Link>
              </li>
            </ul>
          </nav>
          <aside>
            <Profile>
              <div>
                <strong>{profile.name}</strong>
                <Link to="/profile">Meu Perfil</Link>
              </div>
              <img
                src={
                  (profile.avatar && profile.avatar.url) ||
                  avatarNoImage
                }
                alt=""
              />
            </Profile>
            <button onClick={handleToggleVisible}>
              {/* <MdMenu color={'#7159c1'} size={20} /> */}
              <div>
                <div></div>
              </div>
            </button>
          </aside>
        </Content>
      </Container>
      <Sidebar id="sidebarContainer" onClick={handleCloseSidebar} visible={visible}>
        <div>
          <img
            src={
              (profile.avatar && profile.avatar.url) ||
              'https://api.adorable.io/avatars/285/abott@adorable.png'
            }
            alt=""
          />
          <strong>{profile.name}</strong>
          <Link to="/profile">Meu Perfil</Link>
          <SideItems>
            <li>
              <Link to="/dashboard">Ínicio</Link>
            </li>
            <li>
              <Link to="/product">Adicionar Produto</Link>
            </li>
          </SideItems>
        </div>
      </Sidebar>
    </>
  );
}
