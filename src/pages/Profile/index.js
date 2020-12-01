import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import api from '../../services/api';
import avatarNoImage from '../../assets/Images/avatarNoImage.png'

import { Container, Content } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [image, setImage] = useState(
    (profile.avatar && profile.avatar.url) ||
    avatarNoImage
  );
  const [file, setFile] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      avatar_id: file,
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    };

    dispatch(updateProfileRequest(data));
  }

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('files-user', data);
    const { id, url } = response.data;

    setImage(url);
    setFile(id);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <label htmlFor="avatar">
            <img
              src={
                image ||
                avatarNoImage
              }
              alt=""
            />
            <input id="avatar" type="file" onChange={handleChange} />
          </label>
          <input
            type="text"
            placeholder="Seu nome:"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Seu e-mail:"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <hr />
          <input
            type="password"
            placeholder="Sua antiga senha:"
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}
          />
          <input
            type="password"
            placeholder="Sua nova senha:"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirme sua nova senha:"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <button type="submit">Fazer Alterações</button>
          <button type="button" onClick={handleSignOut}>
            Sair do Manager Product
          </button>
        </form>
      </Content>
    </Container>
  );
}
