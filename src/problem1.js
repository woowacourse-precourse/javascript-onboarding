function problem1(pobi, crong) {
  const [a, b] = pobi;

  const addPbOdd = a
    .toString()
    .split("")
    .reduce((acc, cur) => acc + cur);
  const addPbEven = b
    .toString()
    .split("")
    .reduce((acc, cur) => acc + cur);

  const mulPbOdd = a
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);
  const mulPbEven = b
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur);




}

module.exports = problem1;
