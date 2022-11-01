function sliceCryptogram(str, idx) {
  return str.slice(0, idx-1) + str.slice(idx+1);
}

function problem2(cryptogram) {
  let answer = null;
  let idx = 0;
  let prev = null;
  let count = 0; // 중복문자를 셀 카운트 변수

  // slice를 하기 위한 while loop
  while(cryptogram.length > idx) {
    
    if(idx == 0) {
      prev = cryptogram[0];
      idx++;
      count++;
      continue;
    }

    if(cryptogram[idx] == prev) {
      // 이전 문자와 동일할 경우 slice를 이용해 잘라내어 붙인다.
      cryptogram = sliceCryptogram(cryptogram, idx)
      idx = 0; // index 초기화
      continue;
    }
    prev = cryptogram[idx];
    idx++;
  }

  answer = cryptogram;
  return answer;
}

console.log(problem2('boooooooat'));
// console.log(problem2("browoanoommnaon"));
// console.log(problem2("zyelleyz"));

module.exports = problem2;
