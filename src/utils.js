const debounce = (cb) => {
  let lastTimeout = null;
  return (...parameters) => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => cb(...parameters), 500);
  };
};

const generateRandomString = () => Math.random().toString(36).substr(2, 5);

export {
  debounce,
  generateRandomString,
};
