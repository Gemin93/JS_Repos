import React, { FC, Fragment, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '@features/subscribeNotification/components/Modal/Modal';
// import { Dispatch } from '@app/store';
//импортировать action
import { Title } from '@components/Title/Title';
import { Card } from '@components/Card/Card';

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
    </Fragment>
  );
};
