import { Fragment } from 'react';

import EmoSummary from './EmoSummary';
import AvailableEmo from './AvailableEmo';

const Emotions = () => {
  return (
    <Fragment>
      <EmoSummary />
      <AvailableEmo />
    </Fragment>
  );
};

export default Emotions;
