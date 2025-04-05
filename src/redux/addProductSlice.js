import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:   JSON.parse(localStorage.getItem("products")) || []
};

const addproductSlice = createSlice({
    name: "addProductSlice",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem("products", JSON.stringify(state.products)); 
            
        }
    }
});

export const { addProducts } = addproductSlice.actions;
export default addproductSlice.reducer;
