import { Fragment } from 'react';

import Summary from './Summary';
import MealsManu from './MealsManu';

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <MealsManu />
    </Fragment>
  );
};

export default Meals;
