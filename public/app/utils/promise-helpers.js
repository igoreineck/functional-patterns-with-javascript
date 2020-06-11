// Dealing with common Promise conditions
export const handleStatus = res =>
  res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
  console.log(param);
  return param;
};

// Promise timeout using race Pattern
export const timeoutPromise = (miliseconds, promise) => {
  const timeout = new Promise((resolve, reject) =>
    setTimeout(
      () => reject(`Limite da promise excedido (limite: ${miliseconds})`),
      miliseconds,
    ),
  );
  return Promise.race([timeout, promise]);
};

// Adding a delay into async operations
export const delay = miliseconds => data =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(data), miliseconds),
  );

// Adding a retry operation to an executed method
export const retry = (retries, milliseconds, fn) =>
  fn().catch(err => {
    console.log(retries);
    return delay(milliseconds)().then(() =>
      retries > 1 ? retry(--retries, milliseconds, fn) : Promise.reject(err),
    );
  });
