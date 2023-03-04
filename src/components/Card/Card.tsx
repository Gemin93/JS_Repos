import React, { FC, useState } from 'react';
import './Card.css';
import { IReposInfo } from '@features/getRepos/types';
import { Modal } from '@features/subscribeNotification/components/Modal/Modal';
import { Fork } from '@components/Icons/Fork';
import { Star } from '@components/Icons/Star';

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
              <div className="card__rating-image">
                <Star />
              </div>
              <span className="card__rating-info">{repository.stargazers_count}</span>
            </div>
            <div className="card__rating-element">
              <div className="card__rating-image">
                <Fork />
              </div>
              <span className="card__rating-info">{repository.forks}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
