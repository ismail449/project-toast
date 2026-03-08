import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastArray, handleRemoveToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastArray.map(({ id, message, ...rest }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast {...rest} handleClose={handleRemoveToast} id={id} >{message}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
