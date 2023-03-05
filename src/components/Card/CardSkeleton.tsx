import React, { FC } from 'react';
import './Card.css';
import { Fork } from '@components/Icons/Fork';
import { Star } from '@components/Icons/Star';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';

export const CardSkeleton: FC = () => {
  return (
    <>
      <div className="card">
        <div className="card__container" style={{ width: '100%' }}>
          <div className="card__name">
            <SkeletonText />
          </div>
          <div className="card__description">
            <SkeletonText rowsCount={2} />
          </div>
          <div className="card__rating">
            <div className="card__rating-element">
              <div className="card__rating-image">
                <Star />
              </div>
              <div className="card__rating-info">
                <SkeletonText />
              </div>
            </div>
            <div className="card__rating-element">
              <div className="card__rating-image">
                <Fork />
              </div>
              <div className="card__rating-info">
                <SkeletonText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
