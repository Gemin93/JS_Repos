import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchRepos } from '@app/api';
import { setRepos } from '../getRepos/slice';

export const fetchRepos = createAsyncThunk('api/FetchRepos', (_, thunk) => {
  return apiFetchRepos().then((rep) => {
    thunk.dispatch(setRepos(rep));
  });
});
