import React, { FC } from 'react';
import './Modal.css';
import { ModalWrapper } from '@components/ModalWrapper/ModalWrapper';
import star from '@images/star.svg';
import fork from '@images/fork.svg';
import link from '@images/link.svg';

interface EmailModalProps {
  onClose: VoidFunction;
  shown: boolean;
}

export const Modal: FC<EmailModalProps> = ({ onClose, shown }: EmailModalProps) => {
  return (
    <ModalWrapper shown={shown} onClose={onClose}>
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <img src={require('../../../../images/cross.svg')} alt="Закрытие модального окна" />
        </button>
        <div className="modal-card">
          <div className="container modal-card__container">
            <p className="modal-card__company">Facebook</p>
            <h1 className="modal-card__name">React</h1>
            <p className="modal-card__description">
              A declarative, efficient, and flexible JavaScript library for building user interfaces.
            </p>
            <div className="modal-card__link">
              <img src={link} alt="link" className="modal-card__link-image" />
              <span className="modal-card__link-text">react.org</span>
            </div>

            {/* массив из тегов сформировать */}
            <div className="modal-card__tag">
              <span className="modal-card__tag-item">declarative</span>
              <span className="modal-card__tag-item">declarative</span>
              <span className="modal-card__tag-item">declarative</span>
              <span className="modal-card__tag-item">declarative</span>
              <span className="modal-card__tag-item">declarative</span>
              <span className="modal-card__tag-item">declarative</span>
              <span className="modal-card__tag-item">declarative</span>
            </div>

            <div className="modal-card__rating">
              <div className="modal-card__rating-element">
                <img src={star} alt="star" className="modal-card__rating-image" />
                <span className="modal-card__rating-info">stars</span>
              </div>
              <div className="modal-card__rating-element">
                <img src={fork} alt="fork" className="modal-card__rating-image" />
                <span className="modal-card__rating-info">forks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
