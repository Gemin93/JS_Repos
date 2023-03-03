import React, { FC, Fragment, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '@features/subscribeNotification/components/Modal/Modal';
// import { Dispatch } from '@app/store';
//импортировать action
import { Title } from '@components/Title/Title';
import { Card } from '@components/Card/Card';
// import { Carousel } from '@components/Carousel/Carousel';
import './Page.css';
import { Slider } from '@components/Slider/Slider';

// import { CarouselCompound } from '@components/Carousel/Carousel';
// import { CarouselSlide } from '@components/CarouselSlide/CarouselSlide';
// import { Slider } from '@components/Slider/Slider';

// const LS_EMAIL_SHOWN_KEY = 'newsfeed:email_modal_shown';

export const Page: FC = () => {
  // const dispatch = useDispatch<Dispatch>();
  const [emailModalShown, setEmailModalShown] = useState(true);

  React.useEffect(() => {
    // dispatch(fetchCategories());
    // dispatch(fetchSources());
  }, []);

  return (
    <Fragment>
      <Modal
        shown={emailModalShown}
        onClose={() => {
          setEmailModalShown(false);
        }}
      />

      <Title />
      <Card onClick={() => setEmailModalShown(true)} />
      <Slider />
      {/*<Carousel>*/}
      {/*  <div className="item item-1">item-1</div>*/}
      {/*  <div className="item item-2">item-1</div>*/}
      {/*  <div className="item item-3">item-1</div>*/}
      {/*</Carousel>*/}

      {/* <Slider width={'100%'} height={'100%'} /> */}
    </Fragment>
  );
};

// <div className="item item-1">item-1</div>
// <div className="item item-2">item-1</div>
// <div className="item item-3">item-1</div>
