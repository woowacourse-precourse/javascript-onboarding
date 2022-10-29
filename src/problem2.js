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

const convertToCharacterArray = string => copyArray(string);

const convertToString = stringArray => {
  const copyedStringArray = copyArray(stringArray);

  return copyedStringArray.join("");
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
