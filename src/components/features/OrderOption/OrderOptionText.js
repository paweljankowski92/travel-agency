import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = () => (
  <div>
    <label>
      <input
        className={styles.input}
        type='text'
        placeholder='Write here...'
      />
    </label>
  </div>
);

export default OrderOptionText;
