import React, { useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@app/store';
import { getRepos } from '@features/getRepos/selectors';
import { fetchRepos } from '@features/getRepos/actions';
import { ReposList } from '@components/ReposList/ReposList';
import './Slider.css';
import { ArrowPrev } from '@components/Icons/ArrowPrev';
import { ArrowNext } from '@components/Icons/ArrowNext';
import { CardSkeleton } from '@components/Card/CardSkeleton';

export const Slider: FC = () => {
  const reposList = useSelector(getRepos);
  const dispatch = useDispatch<Dispatch>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    dispatch(fetchRepos()).finally(() => setLoading(false));
  }, []);
  const [slide, setSlide] = useState<number>(0);

  const prevSlide = () => {
    slide === 0 ? setSlide(reposList.length - 1) : setSlide(slide - 1);
  };

  const nextSlide = () => {
    slide === reposList.length - 1 ? setSlide(0) : setSlide(slide + 1);
  };

  if (loading) {
    return (
      <div className="slider container">
        <div className="arrow arrow-prev" onClick={prevSlide}>
          <ArrowPrev />
        </div>
        <div className="slider__item">
          <CardSkeleton />
        </div>
        <div className="arrow arrow-next" onClick={nextSlide}>
          <ArrowNext />
        </div>
      </div>
    );
  }

  return (
    <div className="slider container">
      <div className="arrow arrow-prev" onClick={prevSlide}>
        <ArrowPrev />
      </div>
      <div className="slider__item">
        <ReposList sliderNumber={slide} />
      </div>
      <div className="arrow arrow-next" onClick={nextSlide}>
        <ArrowNext />
      </div>
    </div>
  );
};
