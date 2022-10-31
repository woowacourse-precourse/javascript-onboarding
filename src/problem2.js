function problem2(cryptogram) {
  // 문자열을 배열로 바꾼다.
  let cryptogramArray = Array.from(cryptogram);
  // index + 1의 값을 환인할 변수 / 연속된 값이 있는지 없는지 확인할 수 있는 키로 적용
  let tmpIndex = null;

  // 배열을 하나씩 돌면서 연속된 값을 제거한다.
  cryptogramArray = cryptogramArray.map((ele, index) => {
    if(tmpIndex === index) return false;
    if(ele === cryptogramArray[index+1]) {
      tmpIndex = index+1;
      return false;
    }
    else return ele;
  }).filter((ele) => ele);
  
  if(tmpIndex) return problem2(cryptogramArray.join(""));
  else return cryptogramArray.join("");
}

module.exports = problem2;
