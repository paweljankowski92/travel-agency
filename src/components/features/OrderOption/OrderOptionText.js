import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <label>
      <input
        className={styles.input}
        type='text'
        placeholder='Write here...'
        onChange={event => setOptionValue(event.currentTarget.value)}
      />
    </label>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
