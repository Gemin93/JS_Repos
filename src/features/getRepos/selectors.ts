import { RootState } from '@app/store';
import { IReposInfo } from '../getRepos/types';

export const getRepos = (state: RootState): IReposInfo[] => state.reposSlice.repos;
