const copyArray = targetArray => {
  return [...targetArray];
};

const each = (iterable, func) => {
  for (const iterator of iterable) {
    func(iterator);
  }

  return;
};

const getLength = element => {
  if (!element.length) {
    return 0;
  }

  return element.length;
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
