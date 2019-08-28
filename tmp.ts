const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

const l = last([1, 2, 3]);

const l2 = last(['a', 'b', 'c']);

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

const m = makeArr(5, 6);
const m2 = makeArr('a', 'b');
const m3 = makeArr('a', 7);