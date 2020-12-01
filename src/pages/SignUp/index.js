import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <input
        type="password"
        placeholder="Sua senha:"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button type="submit">Cadastrar</button>
      <Link to="/">Já possui conta? Faça login!</Link>
    </form>
  );
}
