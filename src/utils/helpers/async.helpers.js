// eslint-disable-next-line import/prefer-default-export
export const sleep = (ms = 500) => new Promise((r) => {
  setTimeout(r, ms);
});
