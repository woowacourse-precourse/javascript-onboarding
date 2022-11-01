function problem2(cryptogram) {
  while(isContinual(cryptogram)) {
    cryptogram = translate(cryptogram);
  }
  return cryptogram;
}

// 인자로 받은 문자의 연속적인 부분을 제거하는 함수
function translate(cryptogram) {
  const strArr = [...cryptogram];
  let result = "";

  for(let i = 1; i<strArr.length; i++) {
    if(strArr[i-1] != strArr[i]) {
      result += strArr[i-1];
    } else {
        while(strArr[i-1] == strArr[i]) {
          i++;
        }
    }
  }
  if(strArr[strArr.length-2] != strArr[strArr.length-1]){
    result += strArr[strArr.length-1];
  }
  return result;
}

// 인자로 받는 문자에 연속적인 부분이 있는지 확인하는 함수
function isContinual(string) {
  const strArr = [...string];
  if(strArr.length === 0) {
    return false;
  }
  for(let i = 1; i < strArr.length; i++) {
    if(strArr[i - 1] === strArr[i]) {
      return true;
    }
  }
  return false;
}
module.exports = problem2;
