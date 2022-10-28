const crypto = (element) => {
  var ans = "";
  if (element >= 'A' && element <= 'Z'){
    asciiNum = 'Z'.charCodeAt() - (element.charCodeAt() - 'A'.charCodeAt()); //아스키코드를 사용하여 풀 수 있다.
    ans = String.fromCharCode(asciiNum);
  }
  else if (element >= 'a' && element <= 'z'){
    asciiNum = 'z'.charCodeAt() - (element.charCodeAt() - 'a'.charCodeAt());
    ans = String.fromCharCode(asciiNum);
  }
  else{
    ans = element;
  }

  return ans;
}

function problem4(word) {
  var answer = "";
  var asciiNum = 0;
  word = [...word];
  
  word.forEach(element => {
    answer += crypto(element);
  });

  return answer;
}

module.exports = problem4;
