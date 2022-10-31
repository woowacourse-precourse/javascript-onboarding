const findCrypto = (element) => {
  var el = "";
  // 대문자인 경우.
  if (element >= 'A' && element <= 'Z'){
    asciiNum = 'Z'.charCodeAt() - (element.charCodeAt() - 'A'.charCodeAt()); //아스키코드를 사용하여 풀 수 있다.
    el = String.fromCharCode(asciiNum);
  }
  // 소문자인 경우.
  else if (element >= 'a' && element <= 'z'){
    asciiNum = 'z'.charCodeAt() - (element.charCodeAt() - 'a'.charCodeAt());
    el = String.fromCharCode(asciiNum);
  }
  // 그 외 나머지 빈칸.
  else{
    el = element;
  }

  return el;
}

const problem4 = (word) => {
  var answer = "";
  word = [...word];
  
  word.forEach(element => {
    answer += findCrypto(element);
  });

  return answer;
}

module.exports = problem4;
