import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        cartProducts: []
    },
    reducers: {
        addProduct(state, action){
            state.cartProducts.push(action.payload)
        },
        removeProduct(state, action){
            state.cartProducts = state.cartProducts.filter(product => product.id!== action.payload.id)
        }
    }
})

export const addProduct = ProductSlice.actions.addProduct
export const removeProduct = ProductSlice.actions.removeProduct
export default ProductSlice.reducer
