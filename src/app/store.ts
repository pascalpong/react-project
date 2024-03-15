import { AuthService } from '../api/authService';
import { SerialService } from '../api/serialService';      
import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './commonSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ProjectService } from '../api/projectService';

export const store = configureStore({
  reducer: {
    common: commonSlice,
    [AuthService.reducerPath]: AuthService.reducer,
    [SerialService.reducerPath]: SerialService.reducer,
    [ProjectService.reducerPath]: ProjectService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthService.middleware,
      SerialService.middleware,
      ProjectService.middleware,
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
