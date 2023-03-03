import { configureStore, ThunkDispatch, ThunkAction, PayloadAction } from '@reduxjs/toolkit';
import reposSlice from '@features/getRepos/slice';
//импортировать редьюсер

export const store = configureStore({
  reducer: {
    reposSlice: reposSlice,
    //добавить редьюсер
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ThunkDispatch<RootState, unknown, PayloadAction>;
export type AppAction<R> = ThunkAction<R, RootState, unknown, PayloadAction>;
