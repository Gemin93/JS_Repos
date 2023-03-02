import React, { FC } from 'react';
import './CarouselSlide.css';

export const CarouselSlide: FC = ({ children }) => {
  return <div className="slide__container">{children}</div>;
};
