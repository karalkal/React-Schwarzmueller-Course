import { Fragment } from 'react';

import Summary from './Summary';
import MealsMenu from './MealsMenu';

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <MealsMenu />
    </Fragment>
  );
};

export default Meals;
