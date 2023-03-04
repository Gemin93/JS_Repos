import React, { FC, useState } from 'react';
import fork from '../../images/fork.svg';
import star from '../../images/star.svg';
import './Card.css';
import { IReposInfo } from '@features/getRepos/types';
import { Modal } from '@features/subscribeNotification/components/Modal/Modal';

interface Props {
  repository: IReposInfo;
}

export const Card: FC<Props> = ({ repository }) => {
  const [emailModalShown, setEmailModalShown] = useState(false);
  return (
    <>
      <Modal
        shown={emailModalShown}
        onClose={() => {
          setEmailModalShown(false);
        }}
        repository={repository}
      />
      <div className="card">
        <div className="card__container" onClick={() => setEmailModalShown(true)}>
          <h1 className="card__name">{repository.name}</h1>
          <p className="card__description">{repository.description}</p>
          <div className="card__rating">
            <div className="card__rating-element">
              <img src={star} alt="star" className="card__rating-image" />
              <span className="card__rating-info">{repository.stargazers_count}</span>
            </div>
            <div className="card__rating-element">
              <img src={fork} alt="fork" className="card__rating-image" />
              <span className="card__rating-info">{repository.forks}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
