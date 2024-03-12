import { AuthService } from '../api/authService';
import { SerialService } from '../api/serialService';      
import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './commonSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    common: commonSlice,
    [AuthService.reducerPath]: AuthService.reducer,
    [SerialService.reducerPath]: SerialService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthService.middleware,
      SerialService.middleware,
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
