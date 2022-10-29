const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const convertToString = element => `${element}`;

const findThreeSixNine = eachString => {
  const find = true;
  const THREE = "3";
  const SIX = "6";
  const NINE = "9";

  switch (eachString) {
    case THREE:
      break;
    case SIX:
      break;
    case NINE:
      break;
    default:
      return false;
  }

  return find;
};

const isFindThreeSixNine = (eachString, count) => {
  let _count = count;

  if (findThreeSixNine(eachString)) {
    _count += 1;
  }

  return _count;
};

const startThreeSixNine = (currentNumber, count) => {
  if (currentNumber === 0) {
    return count;
  }

  let _count = count;
  const stringElement = convertToString(currentNumber);
  const nextNumber = currentNumber - 1;

  each(stringElement, eachString => {
    _count = isFindThreeSixNine(eachString, _count);
  });

  return startThreeSixNine(nextNumber, _count);
};

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
