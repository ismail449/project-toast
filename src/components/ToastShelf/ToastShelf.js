import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toastArray } = useToastContext();

  return (
    <ol className={styles.wrapper}>
      {toastArray.map(({ id, message, ...rest }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast {...rest} id={id}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
