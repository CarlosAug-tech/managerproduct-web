import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProductRequest } from '../../store/modules/product/actions';

import productNoImage from '../../assets/Images/productNoImage.png'

import { Container, Content } from './styles';
import api from '../../services/api';

export default function EditProduct({ match }) {
  const testeProd = useSelector((state) => state.product.product);
  const [name, setName] = useState(testeProd.name);
  const [description, setDescription] = useState(testeProd.description);
  const [price, setPrice] = useState(testeProd.price);
  const [file, setFile] = useState(testeProd.image_id);

  const [image, setImage] = useState(
    (testeProd.imageproduct && testeProd.imageproduct.url) ||
    productNoImage
  );

  const dispatch = useDispatch();
  const { id } = match.params;

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      image_id: file,
      id,
      name,
      description,
      price,
    };

    dispatch(updateProductRequest(data));
  }

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('files-user', data);
    const { id, url } = response.data;

    setImage(url);
    setFile(id);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <label htmlFor="avatar">
            <img
              src={
                (image && image) ||
                productNoImage
              }
              alt=""
            />
            <input type="file" id="avatar" onChange={handleChange} />
          </label>
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

          <button type="submit">Fazer Alterações</button>
        </form>
      </Content>
    </Container>
  );
}
