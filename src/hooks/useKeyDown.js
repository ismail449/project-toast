import React from 'react';

export function useKeyDown(keyCode, callbackFn) {
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.code !== keyCode) return;

      callbackFn();
    },
    [keyCode, callbackFn],
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}
