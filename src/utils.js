import dayjs from "dayjs";
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

const humanizeDate = (format, date) => {
  return dayjs(date).format(format);
};

export {
  debounce,
  generateRandomString,
  humanizeDate
};
