function problem2(cryptogram) {
  var answer;
  let duplicateCnt = [];
  let strArr = [...cryptogram];
  while (true) {
    if (checkArrIsNull(strArr)) {
      return "";
    }
    strArr = countDuplicateChar(strArr, duplicateCnt);
    if (checkArrIsNull(duplicateCnt)) {
      break;
    }
    strArr = sliceArrStr(duplicateCnt, strArr);
    duplicateCnt = [];
  }
  return (answer = arrToStr(strArr));
}

const checkArrIsNull = (arr) => {
  return arr.length === 0 ? true : false;
};

const arrToStr = (strArr) => {
  tempArr = "";
  strArr.map((e) => {
    tempArr = tempArr + e;
  });
  return tempArr;
};

const sliceArrStr = (cnt, arr) => {
  cnt = new Set(cnt);
  [...cnt].map((e, idx) => {
    arr.splice(e - idx, 1);
  });
  return arr;
};

const countDuplicateChar = (arr, cnt) => {
  arr.reduce((accStr, curStr, idx, accStrArr) => {
    accStrArr[idx - 1] === curStr ? cnt.push(idx - 1, idx) : null;
  });
  return arr;
};

module.exports = problem2;
