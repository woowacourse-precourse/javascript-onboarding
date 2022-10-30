function problem2(cryptogram) {
  var answer;
  let duplicateCnt = [];
  let strArr = [...cryptogram];
  while (true) {
    if (checkArrIsNull(strArr)) {
      return "";
    }

    return (answer = arrToStr(strArr));
  }

  return answer;
}

const checkArrIsNull = (arr) => {
  return arr.length === 0 ? true : false;
};

module.exports = problem2;
