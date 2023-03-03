import React, { FC, useState } from 'react';
import './Carousel.css';
import next from '../../images/next.svg';
import prev from '../../images/prev.svg';

const PAGE_WIDTH = 620;

export const Carousel: FC = ({ children }) => {
  // const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   return setPages(
  //     Children.map(children, (child) => {
  //       return cloneElement(child, {
  //         style: {
  //           height: '100%',
  //           minWidth: `${PAGE_WIDTH}px`,
  //           maxWidth: `${PAGE_WIDTH}px`,
  //         },
  //       });
  //     })
  //   );
  // }, []);

  // const handleNextClick = () => {
  //   const maxOffset = -(PAGE_WIDTH * (children.length - 1));
  //   setOffset((currentOffset) => {
  //     return Math.max(currentOffset - PAGE_WIDTH, maxOffset);
  //   });
  // };

  const handlePrevClick = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + PAGE_WIDTH, 0);
    });
  };

  return (
    <div className="main-container container">
      <img src={prev} alt="prev arrow" className="arrow arrow-prev" onClick={handlePrevClick} />
      <div className="window">
        <div className="all-pages-container" style={{ transform: `translateX(${offset}px)` }}>
          {children}
        </div>
      </div>
      <img src={next} alt="next arrow" className="arrow arrow-left" />
    </div>
  );
};
