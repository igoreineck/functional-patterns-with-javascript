// Transforming some function in a partial implementation
export const partialize = (fn, ...args) => fn.bind(null, ...args);

// Pipe Composing Pattern
export const compose = (...fns) => value =>
  fns.reduceRight((previousValue, fn) => fn(previousValue), value);

export const pipe = (...fns) => value =>
  fns.reduce((previousValue, fn) => fn(previousValue), value);

// Limiting the times that some function can be executed
export const takeUntil = (times, fn) => () => times-- > 0 && fn();

// Can be found in RxJS too
export const debounceTime = (miliseconds, fn) => {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, miliseconds);
  };
};
