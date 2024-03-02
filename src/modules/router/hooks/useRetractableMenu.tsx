import { useState } from 'react';

export const useRetractableMenu = () => {
  const [isMenuRetracted, setIsMenuRetracted] = useState<boolean>(false);
  const handleMenuRetracted = () => {
    setIsMenuRetracted((prev) => !prev);
  };
  return { isMenuRetracted, handleMenuRetracted };
};