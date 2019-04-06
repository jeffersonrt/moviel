export const unique = (list, key) => {
  const filtered = list
    .map(e => e[key])
    .map((e, i, arr) => arr.indexOf(e) === i && i)
    .filter(e => list[e]).map(e => list[e]);
  return filtered;
}
