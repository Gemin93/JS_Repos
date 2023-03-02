import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReposInfo } from '../getRepos/types';

interface InitialState {
  items: Record<number, IReposInfo>;
}

const initialState: InitialState = {
  items: {},
};

export const reposSlice = createSlice({
  name: 'reposList',
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<IReposInfo>) => {
      state.items = {
        ...state.items,
        [action.payload.id]: action.payload
      }
    },
  },
});

export const { setRepos } = reposSlice.actions;

export default reposSlice.reducer;
