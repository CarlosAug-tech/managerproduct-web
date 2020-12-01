import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProductRequest } from '../../store/modules/product/actions';

import { Container, Content } from './styles';

export default function Product() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      price,
    };

    dispatch(addProductRequest(data));
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do produto:"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Descrição do produto"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <input
            type="number"
            placeholder="Preço do produto:"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <button type="submit">Adicionar Produto</button>
        </form>
      </Content>
    </Container>
  );
}
