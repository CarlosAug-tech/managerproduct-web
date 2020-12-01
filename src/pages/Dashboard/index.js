import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import productNoImage from '../../assets/Images/productNoImage.png'

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import {
  deleteProduct,
  editProduct,
} from '../../store/modules/product/actions';

import { MdEdit, MdDelete, MdCancel } from 'react-icons/md';
import { Container, Content, ProductList, ConfirmDel, ModalDeleteContent, ButtonCloseModal } from './styles';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();
  const prod = useSelector((state) => state.product.product);
  const [modal, setModal] = useState(false);

  function handleCheckDelete(id) {
    dispatch(deleteProduct(id));
    setModal(!modal);
  }

  async function handleDelete() {
    await api.delete(`/products/${prod}`);
    setModal(!modal);
    const productIndex = prod;
    if (productIndex >= 0) {
      const newProd = products.filter((x) => x.id !== productIndex);
      setProducts(newProd);
    }
  }

  function handleEdit(product) {
    dispatch(editProduct(product));
  }

  function handleCloseDelete(){
    setModal(!modal)
  }

  function handleCloseOutsideModal(e){
    if(e.target.id === 'modalDeleteProduct'){
      handleCloseDelete()
    }
  }

  return (
    <Container>
      <Content>
        <ProductList>
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <img
                  src={
                    (product.imageproduct && product.imageproduct.url) ||
                    productNoImage
                  }
                  alt=""
                />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong>{product.priceFormatted}</strong>
                </div>
                <div>
                  <button onClick={() => handleEdit(product)}>
                    <Link to={`/editProduct/${product.id}`}>Editar</Link>
                    <MdEdit color={'#7159c1'} size={16} />
                  </button>
                  <button onClick={() => handleCheckDelete(product.id)}>
                    Delete
                    <MdDelete color={'#7159c1'} size={16} />
                  </button>
                </div>
              </li>
            ))}
        </ProductList>
      </Content>
      <ConfirmDel id="modalDeleteProduct" modal={modal} onClick={handleCloseOutsideModal} >  
        <ModalDeleteContent>
          <strong>Deseja deletar este produto:</strong>          
          <div>
            <button onClick={handleDelete}>Sim</button>
            <button onClick={handleCloseDelete}>Cancelar</button>
          </div>
          <ButtonCloseModal>
            <MdCancel size={35} color="#054f77" onClick={handleCloseDelete} />
          </ButtonCloseModal>
        </ModalDeleteContent>
      </ConfirmDel>
    </Container>
  );
}
