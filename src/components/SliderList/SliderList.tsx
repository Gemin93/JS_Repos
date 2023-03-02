import React, { FC, useContext } from 'react';
import { Card } from '../Card/Card';

export const SliderList: FC = () => {
  return (
    <div className="slide-list">
      <Card />
      <Card />
      <Card />
    </div>
  );
};
