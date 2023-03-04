import React, { FC } from 'react';
import './Modal.css';
import { ModalWrapper } from '@components/ModalWrapper/ModalWrapper';
import star from '@images/star.svg';
import fork from '@images/fork.svg';
import link from '@images/link.svg';
import { IReposInfo } from '@features/getRepos/types';

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
            <p className="modal-card__company">{repository.owner.login}</p>
            <h1 className="modal-card__name">{repository.name}</h1>
            <p className="modal-card__description">{repository.description}</p>
            <div className="modal-card__link">
              <img src={link} alt="link" className="modal-card__link-image" />
              <a target="_blank" rel="noreferrer" href={repository.homepage} className="modal-card__link-text">
                {repository.homepage}
              </a>
            </div>
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
                <img src={star} alt="star" className="modal-card__rating-image" />
                <span className="modal-card__rating-info">{repository.stargazers_count}</span>
              </div>
              <div className="modal-card__rating-element">
                <img src={fork} alt="fork" className="modal-card__rating-image" />
                <span className="modal-card__rating-info">{repository.forks}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
