const copyArray = targetArray => {
  return [...targetArray];
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

const getLength = element => {
  if (!element.length) {
    return 0;
  }

  return element.length;
};

const checkRangeException = (targetLength, min, max) => {
  if (targetLength < min || max < targetLength) {
    throw new RangeError(
      `Only natural numbers greater than or equal to ${min} and less than or equal to ${max}.`
    );
  }

  return false;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
