const getNumArr = (number) =>
  Array.from({ length: number }, (_, i) => i + 1 + "");

const matchedWith369 = (num) => num.match(/[369]/g);

function problem3(number) {
  return getNumArr(number).reduce(
    (acc, num) => acc + (matchedWith369(num)?.length ?? 0),
    0
  );
}

module.exports = problem3;
