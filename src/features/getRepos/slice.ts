import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReposInfo } from '../getRepos/types';

interface InitialState {
  repos: IReposInfo[];
}

const initialState: InitialState = {
  repos: [],
};

export const reposSlice = createSlice({
  name: 'reposList',
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<IReposInfo[]>) => {
      state.repos = action.payload;
    },
  },
});

export const { setRepos } = reposSlice.actions;

export default reposSlice.reducer;
