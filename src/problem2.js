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

    return (answer = arrToStr(strArr));
  }

  return answer;
}

const checkArrIsNull = (arr) => {
  return arr.length === 0 ? true : false;
};

const countDuplicateChar = (arr, cnt) => {
  arr.reduce((accStr, curStr, idx, accStrArr) => {
    accStrArr[idx - 1] === curStr ? cnt.push(idx - 1, idx) : null;
  });
  return arr;
};

module.exports = problem2;
