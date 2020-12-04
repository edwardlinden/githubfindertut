import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '20rem', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
