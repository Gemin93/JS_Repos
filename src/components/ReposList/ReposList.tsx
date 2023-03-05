import React, { FC } from 'react';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';
import { getRepos } from '@features/getRepos/selectors';
import './ReposList.css';

interface ReposListProps {
  sliderNumber: number;
}

export const ReposList: FC<ReposListProps> = ({ sliderNumber }) => {
  const reposList = useSelector(getRepos);

  return (
    <div className="repos-list" style={{ transform: `translateX(-${sliderNumber * 100}%)` }}>
      {reposList.map((rep) => {
        return <Card key={rep.id} repository={rep} />;
      })}
    </div>
  );
};
