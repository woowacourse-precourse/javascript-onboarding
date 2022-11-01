function problem2(cryptogram) {
  while(isContinual(cryptogram)) {
    
  }
  return cryptogram;
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
