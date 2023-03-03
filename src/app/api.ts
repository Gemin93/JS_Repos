import { IReposInfo } from '@features/getRepos/types';

export const apiFetchRepos = (): Promise<{ items: IReposInfo[] }> => {
  return fetch(
    'https://api.github.com/search/repositories?q=javascript+in:topics+language:javascript&sort=stars&order=desc'
  ).then((response) => response.json());
};
