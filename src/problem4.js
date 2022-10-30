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

const getGreenFrogDictionary = upperCase => {
  const greenFrogDictionary = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A",
  };

  return greenFrogDictionary[upperCase];
};

const isLowerCase = charCode => {
  if (97 <= charCode && charCode <= 122) {
    return true;
  }

  return false;
};

const isUpperCase = charCode => {
  if (65 <= charCode && charCode <= 90) {
    return true;
  }

  return false;
};

const toLowerCase = string => `${string}`.toLowerCase();

const toUpperCase = string => `${string}`.toUpperCase();

const isAlphabet = charCode => {
  if (isLowerCase(charCode) || isUpperCase(charCode)) {
    return true;
  }

  return false;
};

const convertToArray = string => [...string];

const convertToString = stringArray => {
  if (Array.isArray(stringArray)) {
    return stringArray.join("");
  }

  return "";
};

const breakCode = (eachString, charCode) => {
  if (isLowerCase(charCode)) {
    const upperCase = toUpperCase(eachString);
    const result = getGreenFrogDictionary(upperCase);

    return toLowerCase(result);
  }

  return getGreenFrogDictionary(eachString);
};

const startBreakCode = stringArray => {
  const resultArray = map(stringArray, eachString => {
    const charCode = getCharCode(eachString);

    if (!isAlphabet(charCode)) {
      return eachString;
    }

    return breakCode(eachString, charCode);
  });

  return convertToString(resultArray);
};

const checkException = value => {
  if (typeof value !== "string") {
    throw new TypeError("Only string elements are possible.");
  }

  const valueLength = value.length;

  // 1 이상 1000 이하 문자열
  if (valueLength < 1 || 1000 < valueLength) {
    throw new RangeError("Only strings greater than or equal to 1 and less than or equal to 1000.");
  }

  return false;
};

function problem4(word) {
  checkException(word);

  const stringArray = convertToArray(word);
  const answer = startBreakCode(stringArray);

  return answer;
}

module.exports = problem4;
