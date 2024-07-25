import { createSlice } from '@reduxjs/toolkit'


type Tproduct = {
    category: string,
    id: number,
    image: string,
    price: number,
    rating: { count: number, rate: number },
    title: string,
    description: string,
    quantity: number
}

const initialState = {
    products: [] as Tproduct[],
    quantity: 0,
}

const DataSlice = createSlice({
    name: 'itemsData',
    initialState,
    reducers: {
        additems: (state, action) => {
            const payload = action.payload
            if (state.quantity === 0) {
                state.products.push({ ...payload, quantity: 1 });
                state.quantity = 1
            }
            else {
                for (let i = 0; i < state.products.length; i++) {
                    if (state.products[i].id === payload.id) {
                        state.products[i].quantity += 1;
                        break;
                    }
                    else if (i === state.products.length - 1) {
                        state.products.push({ ...payload, quantity: 1 });
                        state.quantity += 1
                        break;
                    }
                }
            }
        },

        deleteitem: (state, action) => {
            state.products = action.payload
            state.quantity -= 1
        },

        addquantityProduct: (state, action) => {
            const index = action.payload
            state.products[index].quantity += 1
        },
        removequantityProduct: (state, action) => {
            const index = action.payload
            state.products[index].quantity -= 1
        },

    },
})

export const { additems, deleteitem, addquantityProduct, removequantityProduct } = DataSlice.actions

export default DataSlice.reducer