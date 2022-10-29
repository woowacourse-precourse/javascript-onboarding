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

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
