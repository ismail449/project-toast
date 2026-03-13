import React from 'react';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);

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

  return (
    <ToastContext
      value={{
        toastArray,
        removeToast,
        addToast,
      }}
    >
      {children}
    </ToastContext>
  );
}

export const useToastContext = () => {
  return React.useContext(ToastContext);
};

export default ToastProvider;
