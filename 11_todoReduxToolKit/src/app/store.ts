import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../features/todo/todo.slice.ts';

export const reduxStore = configureStore({
    reducer: {
        todo:TodoReducer,
    }
})

export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;
