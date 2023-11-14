import { BaseSyntheticEvent } from 'react';

const debounce = (fn: (e: BaseSyntheticEvent) => void, delay: number) => {
  let timeout: number;

  return (event: BaseSyntheticEvent) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => fn(event), delay);
  };
};

export const delay = 230;

export default debounce;
