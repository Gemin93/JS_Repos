import React, { useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@app/store';
import next from '../../images/next.svg';
import prev from '../../images/prev.svg';
import { getRepos } from '@features/getRepos/selectors';
import { fetchRepos } from '@features/getRepos/actions';
import { Card } from '@components/Card/Card';

// export const SliderContext = createContext();

export const Slider: FC = () => {
  const reposList = useSelector(getRepos);
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch(fetchRepos()).then((res) => console.log(res.payload));
  }, []);
  return (
    <div className="slider">
      {reposList.map((item) => {
        return <Card key={item.id} name={item.name} />;
      })}
    </div>
  );
};
