export interface IReposInfo {
  id: string;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  homepage: string;
  topics: Array<string>;
  stars: number;
  forks: number;
}
