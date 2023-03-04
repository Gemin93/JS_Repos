import React, { FC } from 'react';
import { Title } from '@components/Title/Title';
import './Page.css';
import { Slider } from '@components/Slider/Slider';

export const Page: FC = () => {
  return (
    <>
      <Title />
      <Slider />
    </>
  );
};
