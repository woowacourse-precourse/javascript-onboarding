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

const getCharCode = eachString => `${eachString}`.charCodeAt(0);

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
