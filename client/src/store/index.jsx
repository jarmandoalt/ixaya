import { configureStore } from '@reduxjs/toolkit'
import crudReducer from '../reducer/reducer';

export const store = configureStore({
    reducer: {
        crud: crudReducer
    }
})