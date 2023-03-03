import React, { FC, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@app/store';
import { getRepos } from '@features/getRepos/selectors';
import { fetchRepos } from '@features/getRepos/actions';
import './ReposList.css';

interface ReposListProps {
  sliderNumber: number;
}

export const ReposList: FC<ReposListProps> = ({ sliderNumber }) => {
  const reposList = useSelector(getRepos);
  const dispatch = useDispatch<Dispatch>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    dispatch(fetchRepos()).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Skeleton</div>;
  }

  return (
    <div className="repos-list" style={{ transform: `translateX(-${sliderNumber * 100}%)` }}>
      {reposList.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
            stars={item.stargazers_count}
            forks={item.forks}
          />
        );
      })}
    </div>
  );
};
