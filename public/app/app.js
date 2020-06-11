import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import {
  takeUntil,
  debounceTime,
  partialize,
  pipe,
} from './utils/operators.js';
import { timeoutPromise } from './utils/promise-helpers.js';

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500),
);

const action = operations(() =>
  timeoutPromise(
    200,
    service.sumItems('2143').then(console.log).catch(console.log),
  ),
);

document.querySelector('#myButton').onclick = action;
