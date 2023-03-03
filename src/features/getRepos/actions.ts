import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchRepos } from '@app/api';
import { setRepos } from '../getRepos/slice';
import { IReposInfo } from '@features/getRepos/types';

export const fetchRepos = createAsyncThunk('api/FetchRepos', (_, thunk) => {
  return apiFetchRepos().then((response: { items: IReposInfo[] }) => {
    const reposList: IReposInfo[] = [];
    response.items.forEach((rep) => {
      const repData: IReposInfo = {
        id: rep.id,
        name: rep.name,
        owner: {
          login: rep.owner.login,
        },
        description: rep.description,
        homepage: rep.homepage,
        topics: rep.topics,
        stargazers_count: rep.stargazers_count,
        forks: rep.forks,
      };
      reposList.push(repData);
    });
    thunk.dispatch(setRepos(reposList));
  });
});
