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
