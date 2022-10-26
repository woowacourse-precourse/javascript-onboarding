function problem1(pobi, crong) {
  var answer;
  return answer;
}

const copyArray = targetArray => {
  return [...targetArray];
};

const multiplicationFunction = (first, second) => {
  return first * second;
};

const plusFunction = (first, second) => {
  return first + second;
};

const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const map = (array, func) => {
  const resultArray = [];

  each(array, element => resultArray.push(func(element)));

  return resultArray;
};

module.exports = problem1;
