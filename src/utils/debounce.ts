import { BaseSyntheticEvent } from 'react';

const debounce = (fn: (e: BaseSyntheticEvent) => void, delay: number) => {
  let timeout: number;

  return (event: BaseSyntheticEvent) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => fn(event), delay);
  };
};

export const delay = 1500;

export default debounce;
