function checkOverlap(word) {
  // 문자열(word)내에 중복된 문자가 있으면 true, 없으면 false를 반환한다.
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      result = true;
    }
  }
  return result
}

function problem2(cryptogram) {
  var answer = cryptogram;

  console.log(checkOverlap(answer));
  
  return answer;
}

module.exports = problem2;
