function problem1(pobi, crong) {
  const [a, b] = pobi;

  const addPbOdd = a
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);
  const addPbEven = b
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);

  const mulPbOdd = a
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);
  const mulPbEven = b
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);

  const [c, d] = crong;
  const addCrOdd = c
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);
  const addCrEven = d
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);

  const mulCrOdd = c
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);
  const mulCrEven = d
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);

  const pbScore = [addPbOdd, addPbEven, mulPbOdd, mulPbEven];
  const crScore = [addCrOdd, addCrEven, mulCrOdd, mulCrEven];
}

module.exports = problem1;
