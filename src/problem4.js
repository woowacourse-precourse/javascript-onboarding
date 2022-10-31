const UPPERMIDDLE = 77;
const LOWERMIDDLE = 109;

function problem4(word) {
  var answer;
  return (answer = encode(word));
}

const encode = (word) => {
  let strArr = [];
  [...word].map((e) => {
    const code = findAscii(e);
    if (65 <= code && code <= 90) {
      strArr.push(translater(1, UPPERMIDDLE - code));
    } else if (97 <= code && code <= 122) {
      strArr.push(translater(0, LOWERMIDDLE - code));
    } else {
      strArr.push(e);
    }
  });
  return arrToStr(strArr);
};

const arrToStr = (strArr) => {
  tempArr = "";
  strArr.map((e) => {
    tempArr = tempArr + e;
  });
  return tempArr;
};

const findAscii = (word) => {
  return word.charCodeAt(0);
};

const translater = (type, diff) => {
  return type === 0
    ? String.fromCharCode(LOWERMIDDLE + diff + 1)
    : String.fromCharCode(UPPERMIDDLE + diff + 1);
};

module.exports = problem4;
