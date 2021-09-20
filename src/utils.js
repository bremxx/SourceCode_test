import {DEBOUNCE_DELAY} from "./const";

const debounce = (cb) => {
  let lastTimeout = null;
  return (...parameters) => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => cb(...parameters), DEBOUNCE_DELAY);
  };
};

const generateRandomString = () => Math.random().toString(36).substr(2, 5);

export {
  debounce,
  generateRandomString,
};
