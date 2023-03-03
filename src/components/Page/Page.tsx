import React, { FC, Fragment, useState } from 'react';
import { Modal } from '@features/subscribeNotification/components/Modal/Modal';
import { Title } from '@components/Title/Title';
import './Page.css';
import { Slider } from '@components/Slider/Slider';

export const Page: FC = () => {
  const [emailModalShown, setEmailModalShown] = useState(false);

  return (
    <Fragment>
      <Modal
        shown={emailModalShown}
        onClose={() => {
          setEmailModalShown(false);
        }}
      />
      <Title />
      <Slider />
    </Fragment>
  );
};

