function problem2(cryptogram) {
  let answer;
  let len = cryptogram.length;
  let idx = 0;
  let cryptoArr = cryptogram.split(""); // 탐색하기 편하게 배열로 변환.
  while (idx < len - 1) { // 마지막 전 문자까지 탐색할 것 이므로.
    
    if (cryptoArr[idx] === cryptoArr[idx + 1]) {
      cryptogram = cryptogram.split(`${cryptoArr[idx]}${cryptoArr[idx]}`).join(''); // 문자를 갱신
      cryptoArr = cryptogram.split(""); // 갱신된 문자를 다시 배열로 변환.
      len = cryptogram.length; // 계속해서 길이를 갱신.
      if (idx === 0) idx = 0;
      else idx -= 1;
    }
    else { // 현재 idx의 문자와 뒤의 문자가 같지않다면 다음 문자로 넘어간다.
      idx++;
    }
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
