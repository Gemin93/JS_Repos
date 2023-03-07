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
  const [slide, setSlide] = useState<number>(0); // счетчик слайдов
  const [touchStart, setTouchStart] = useState<number | null>(null); // точка прикосновения
  const [touchEnd, setTouchEnd] = useState<number | null>(null); // точка в которой прикосновение завершилось
  useEffect(() => {
    setLoading(true);
    dispatch(fetchRepos()).finally(() => setLoading(false));
  }, []);

  //получение ширины слайда
  const [halfSlideWidth, setHalfSlideWidth] = useState(0);
  useEffect(() => {
    const widthSlide = document.getElementsByClassName('slider__item')[0].clientWidth;
    setHalfSlideWidth(Math.floor(widthSlide / 2));
  }, []);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > halfSlideWidth;
    const isRightSwipe = distance < -halfSlideWidth;

    if (isRightSwipe) {
      prevSlide();
    }
    if (isLeftSwipe) {
      nextSlide();
    }
  };

  const prevSlide = () => {
    slide === 0 ? setSlide(reposList.length - 1) : setSlide(slide - 1);
  };

  const nextSlide = () => {
    slide === reposList.length - 1 ? setSlide(0) : setSlide(slide + 1);
  };

  if (loading) {
    return (
      <div className="slider container">
        <div className="arrow arrow-prev">
          <ArrowPrev />
        </div>
        <div className="slider__item">
          <CardSkeleton />
        </div>
        <div className="arrow arrow-next">
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
      <div
        className="slider__item"
        onTouchStart={(e) => onTouchStart(e)}
        onTouchMove={(e) => onTouchMove(e)}
        onTouchEnd={onTouchEnd}
      >
        <ReposList sliderNumber={slide} />
      </div>
      <div className="arrow arrow-next" onClick={nextSlide}>
        <ArrowNext />
      </div>
    </div>
  );
};
