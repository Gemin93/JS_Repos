import React, { FC } from 'react';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';
import { getRepos } from '@features/getRepos/selectors';
import './ReposList.css';

interface ReposListProps {
  sliderNumber: number;
  offset: number;
  swipe: boolean;
}

export const ReposList: FC<ReposListProps> = ({ sliderNumber, offset, swipe }) => {
  const reposList = useSelector(getRepos);

  const currentPosition = sliderNumber * 100;

  console.log(currentPosition);

  const swipeSlide = {
    transform: `translateX(-${sliderNumber * 100}%)`,
  };
  const moveSlide = {
    transform: `translateX(-${offset}%)`,
  };

  return (
    <div className="repos-list" style={swipeSlide}>
      {reposList.map((rep) => {
        return <Card key={rep.id} repository={rep} />;
      })}
    </div>
  );
};

// transform: `translateX(-${sliderNumber * 100}%)`
