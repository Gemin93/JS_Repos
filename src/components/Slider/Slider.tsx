import React, { useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@app/store';
import next from '../../images/next.svg';
import prev from '../../images/prev.svg';
import { getRepos } from '@features/getRepos/selectors';
import { fetchRepos } from '@features/getRepos/actions';
import { ReposList } from '@components/ReposList/ReposList';
import './Slider.css';

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

  return (
    <div className="slider container">
      <img src={prev} alt="prevSlide" className="arrow arrow-prev" onClick={prevSlide} />
      <div className="slider__item">
        <ReposList sliderNumber={slide} />
      </div>
      <img src={next} alt="nextSlide" className="arrow arrow-next" onClick={nextSlide} />
    </div>
  );
};
