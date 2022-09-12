import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dataProduct: [],
  selectIdProduct: 0,
  showNumCard : false,
  countNumProducts: 0,
  dataCard: [],
  dataOrder: [],
  newOrder: {
    street_name: "",
    zip_code: "",
    address: "",
    phone: "",
    state: "",
    city: "",
  }
};

const crudReducer = createSlice({
  name: "crudReducer",
  initialState,
  reducers: {
    DATA_PRODUCT: (state, action) => {
        let last = action.payload[5],
          aux = action.payload
          aux.splice(aux.length -1)
          aux.unshift(last)

        state.dataProduct = aux
      },
      SHOW_NUMBER: (state, action) => {
          if (state.countNumProducts >= 0) {
            state.showNumCard = true
          } else {
            state.showNumCard = false
          }
      },
      COUNT_PRODUCTS: (state, action) => {
        state.countNumProducts = action.payload
      },
      DATA_CARD: (state, action) => {
        state.dataCard.push(action.payload)
      },
      UPDATE_DATA_CARD: (state, action) => {
        state.dataCard[action.payload.arrNum].repeat = action.payload.repeat
        state.dataCard[action.payload.arrNum].priceTotal = action.payload.priceTotal
      },
      DATA_ORDER: (state, action) => {
        state.dataOrder = action.payload
      },
      NEW_ORDER: (state, action) => {
        const { title, value } = action.payload;
        state.newOrder = { ...state.newOrder, [title]: value };
      },
      NEW_ORDER_PRODUCTS: (state, action) => {
        state.newOrder = { ...state.newOrder, "product_list": action.payload};
      },
  },
});

export const { DATA_PRODUCT, SELECT_PRODUCT, SHOW_NUMBER, NEW_ORDER_PRODUCTS, DATA_CARD, COUNT_PRODUCTS, UPDATE_DATA_CARD, DATA_ORDER, NEW_ORDER } = crudReducer.actions;

export default crudReducer.reducer;