import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  addProductSuccess,
  productFailure,
  updateProductSuccess,
} from './actions';
import { toast } from 'react-toastify';

export function* addProduct({ payload }) {
  try {
    const { id, name, description, price } = payload.data;

    const response = yield call(api.post, 'products', {
      id,
      name,
      description,
      price,
    });

    yield put(addProductSuccess(response.data));

    toast.success('Produto cadastrado com sucesso!');
  } catch (err) {
    toast.error('Falha no cadastro do produto, verifique os dados');
    yield put(productFailure());
  }
}

export function* updateProduct({ payload }) {
  try {
    const { id, name, description, price, image_id } = payload.data;

    const product = Object.assign({
      name,
      description,
      price,
      image_id,
    });

    const response = yield call(api.put, `products/${id}`, product);

    yield put(updateProductSuccess(response.data));

    toast.success('Produto atualizado com sucesso!');
  } catch (err) {
    toast.error('Falha na atualização do produto, verifique os dados');
    yield put(productFailure());
  }
}

export default all([
  takeLatest('@product/ADD_PRODUCT_REQUEST', addProduct),
  takeLatest('@product/UPDATE_PRODUCT_REQUEST', updateProduct)
]);
