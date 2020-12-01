import { produce } from 'immer';

const INITIAL_STATE = {
  product: [],
  openModal: false,
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/ADD_PRODUCT_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      case '@product/UPDATE_PRODUCT_SUCCESS': {
        draft.product = action.payload.newProduct;
        break;
      }
      case '@product/DELETE_PRODUCT': {
        draft.product = action.payload.id;
        break;
      }
      case '@product/EDIT_PRODUCT': {
        draft.product = action.payload.product;
        break;
      }
      default: {
        return;
      }
    }
  });
}
