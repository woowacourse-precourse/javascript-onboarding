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

const recursiveCheckDuplicateElement = (letterArray, currentIndex, pointArray) => {
  const maxLength = letterArray.length;
  let _nextIndexPoint = currentIndex + 1;

  if (maxLength <= currentIndex) {
    return pointArray;
  }

  if (letterArray[currentIndex] === letterArray[_nextIndexPoint]) {
    pointArray.push(currentIndex);
    _nextIndexPoint = _nextIndexPoint + 1;
  }

  return recursiveCheckDuplicateElement(letterArray, _nextIndexPoint, pointArray);
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
