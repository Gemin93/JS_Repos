export interface IReposInfo {
  id: string;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  homepage: string;
  topics: Array<string>;
  stargazers_count: number;
  forks: number;
}
