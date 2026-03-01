import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info } from 'react-feather';

import Button from '../Button';
import Toast from '../Toast/Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isToastOpen, setIsToastOpen] = React.useState(false);

  function handleToastMessageChange(event) {
    setToastMessage(event.target.value);
  }

  function handleToastVariantChange(event) {
    setToastVariant(event.target.value);
  }

  function handleToastClose() {
    setIsToastOpen(false);
  }

  function handleToastOpen() {
    setIsToastOpen(true);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastOpen && (
        <Toast
          message={toastMessage}
          variant={toastVariant}
          icon={ICONS_BY_VARIANT[toastVariant]}
          handleClose={handleToastClose}
        />
      )}

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
            <Button onClick={handleToastOpen}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
