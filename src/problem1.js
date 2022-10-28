const splitNumber = (number) => {
  const numToString = number.toString();
  const splittedNumber = numToString.split("");
  return splittedNumber;
};

const addNumber = (number) => {
  const splittedNumber = splitNumber(number);
  const sum = splittedNumber.reduce(
    (accumulator, currentNumer) => accumulator + currentNumer,
    0
  );
  return sum;
};

const mulNumber = (number) => {
  const splittedNumber = splitNumber(number);
  const product = splittedNumber.reduce(
    (accumulator, currentNumer) => accumulator * currentNumer,
    0
  );
  return product;
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
