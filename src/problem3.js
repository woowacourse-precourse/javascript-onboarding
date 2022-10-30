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

const checkException = value => {
  if (typeof value !== "number") {
    throw new TypeError("Only numeric elements are possible.");
  }

  // 1 이상 10,000 이하인 자연수
  if (value < 1 || 10000 < value) {
    throw new RangeError(
      "Only natural numbers greater than or equal to 1 and less than or equal to 10,000."
    );
  }

  return false;
};

function problem3(number) {
  checkException(number);

  const startScore = 0;
  const answer = startThreeSixNine(number, startScore);

  return answer;
}

module.exports = problem3;
