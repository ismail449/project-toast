import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';
import {
  useToastContext,
  VARIANT_OPTIONS,
} from '../ToastProvider/ToastProvider';

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { addToast } = useToastContext();

  function handleToastMessageChange(event) {
    setToastMessage(event.target.value);
  }

  function handleToastVariantChange(event) {
    setToastVariant(event.target.value);
  }

  function handleToastSubmit(event) {
    event.preventDefault();
    addToast(toastMessage, toastVariant);

    setToastMessage('');
    setToastVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form onSubmit={handleToastSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={toastMessage}
                onChange={handleToastMessageChange}
                id="message"
                className={styles.messageInput}
                name="message"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                return (
                  <label key={option} htmlFor={`variant-${option}`}>
                    <input
                      id={`variant-${option}`}
                      type="radio"
                      name="variant"
                      checked={toastVariant === option}
                      onChange={handleToastVariantChange}
                      value={option}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
