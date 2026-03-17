import React from 'react';
import ToastShelf from '../ToastShelf/ToastShelf';
import { useKeyDown } from '../../hooks/useKeyDown';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);
  useKeyDown('Escape', clearToastArray);

  function removeToast(toastId) {
    const nextToastArray = toastArray.filter((toast) => toast.id !== toastId);
    setToastArray([...nextToastArray]);
  }

  function addToast(message, variant = VARIANT_OPTIONS[0]) {
    const nextToastArray = [
      ...toastArray,
      {
        message,
        variant,
        id: crypto.randomUUID(),
      },
    ];
    setToastArray(nextToastArray);
  }

  function clearToastArray() {
    setToastArray([]);
  }

  return (
    <ToastContext
      value={{
        toastArray,
        removeToast,
        addToast,
      }}
    >

      <ToastShelf />
      {children}
    </ToastContext>
  );
}

export const useToastContext = () => {
  return React.useContext(ToastContext);
};

export default ToastProvider;
