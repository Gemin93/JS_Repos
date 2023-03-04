import React, { FC } from 'react';
import './Modal.css';
import { ModalWrapper } from '@components/ModalWrapper/ModalWrapper';
import { IReposInfo } from '@features/getRepos/types';
import { Fork } from '@components/Icons/Fork';
import { Star } from '@components/Icons/Star';
import { Link } from '@components/Icons/Link';
import { ucFirst } from '@app/utils';

interface ModalProps {
  onClose: VoidFunction;
  shown: boolean;
  repository: IReposInfo;
}

export const Modal: FC<ModalProps> = ({ onClose, shown, repository }: ModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <img src={require('../../../../images/cross.svg')} alt="Закрытие модального окна" />
        </button>
        <div className="modal-card">
          <div className="container modal-card__container">
            <p className="modal-card__company">{ucFirst(repository.owner.login)}</p>
            <h1 className="modal-card__name">{repository.name}</h1>
            <p className="modal-card__description">{repository.description}</p>
            {repository.homepage && (
              <div className="modal-card__link">
                <div className="modal-card__link-image">
                  <Link />
                </div>
                <a target="_blank" rel="noreferrer" href={repository.homepage} className="modal-card__link-text">
                  {repository.homepage}
                </a>
              </div>
            )}

            <div className="modal-card__tag">
              {repository.topics.map((item) => {
                return (
                  <span key={item} className="modal-card__tag-item">
                    {item}
                  </span>
                );
              })}
            </div>

            <div className="modal-card__rating">
              <div className="modal-card__rating-element">
                <div className="modal-card__rating-image">
                  <Star />
                </div>
                <span className="modal-card__rating-info">{repository.stargazers_count}</span>
              </div>
              <div className="modal-card__rating-element">
                <div className="modal-card__rating-image">
                  <Fork />
                </div>
                <span className="modal-card__rating-info">{repository.forks}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
