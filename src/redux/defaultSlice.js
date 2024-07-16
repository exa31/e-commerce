import { createSlice } from "@reduxjs/toolkit";

// Menentukan initialState dengan struktur yang benar
const initialState = {
    favoriteProducts: [],
    login: false,
    cart: [],
    users: [{
        username: "eka",
        password: "eka"
    }],
    history: []
};




const defaultSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addFavoriteProduct: (state, action) => {
            state.favoriteProducts.push(action.payload);
        },
        removeFavoriteProduct: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter(
                (product) => product.id !== action.payload
            );
        },
        login: (state) => {
            state.login = true;
        },
        logout: (state) => {
            state.login = false;
        },
        addCart: (state, action) => {
            const index = state.cart.findIndex((product) => product.id === action.payload.id);
            if (index === -1) {
                // Produk belum ada di keranjang, tambahkan produk dengan qty: 1
                state.cart.push({ ...action.payload, qty: 1 });
            } else {
                // Produk sudah ada, tingkatkan qty-nya
                state.cart[index].qty += 1;
            }
        },
        reduceCart: (state, action) => {
            const index = state.cart.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                // Produk ada di keranjang, kurangi qty-nya
                state.cart[index].qty -= 1;
                if (state.cart[index].qty === 0) {
                    // Jika qty produk menjadi 0, hapus produk dari keranjang
                    state.cart = state.cart.filter((product) => product.id !== action.payload.id);
                }
            }
        },
        clearAll: (state) => {
            state.cart = [],
                state.favoriteProducts = [],
                state.history = []
        },
        clearCart: (state) => {
            state.cart = []
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload.id)
        },
        addHistory: (state, action) => {
            state.history = action.payload
        },
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
    }
},);

// Menggabungkan ekspor actions
export const { addFavoriteProduct, clearCart, removeFavoriteProduct, login, logout, addCart, reduceCart, removeCart, addHistory, clearAll, addUser } = defaultSlice.actions;
export default defaultSlice.reducer;