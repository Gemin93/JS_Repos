import React, { FC } from 'react';
import fork from '../../images/fork.svg';
import star from '../../images/star.svg';
import './Card.css';

interface Props {
  onClick?: () => void;
  name?: string;
}

export const Card: FC<Props> = ({ onClick, name }) => {
  return (
    <div className="card">
      <div className="container card__container" onClick={onClick}>
        <h1 className="card__name">{name}</h1>
        <p className="card__description">
          A declarative, efficient, and flexible JavaScript library for building user interfaces.
        </p>
        <div className="card__rating">
          <div className="card__rating-element">
            <img src={star} alt="star" className="card__rating-image" />
            <span className="card__rating-info">stars</span>
          </div>
          <div className="card__rating-element">
            <img src={fork} alt="fork" className="card__rating-image" />
            <span className="card__rating-info">forks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

//https://api.github.com/search/repositories?q=javascript+in:topics+language:javascript&sort=stars&order=desc
