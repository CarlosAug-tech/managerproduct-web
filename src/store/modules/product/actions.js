export function addProductRequest(data) {
  return {
    type: '@product/ADD_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function addProductSuccess(product) {
  return {
    type: '@product/ADD_PRODUCT_SUCCESS',
    payload: { product },
  };
}

export function editProduct(product) {
  return {
    type: '@product/EDIT_PRODUCT',
    payload: { product },
  };
}

export function updateProductRequest(data) {
  return {
    type: '@product/UPDATE_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function updateProductSuccess(newProduct) {
  return {
    type: '@product/UPDATE_PRODUCT_SUCCESS',
    payload: { newProduct },
  };
}

export function deleteProduct(id) {
  return {
    type: '@product/DELETE_PRODUCT',
    payload: { id },
  };
}

export function productFailure() {
  return {
    type: '@product/PRODUCT_FAILURE',
  };
}
