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

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
