function removeOverlap(word) {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === word[j + 1]) {
      let n = j + 1;
      while (word[j] !== word[n]) {
        n++;
      }
    }
    console.log(j, n);
  }
  return word
}

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

  if (checkOverlap(answer)) {
    answer = removeOverlap(answer);
  }

  return answer;
}

module.exports = problem2;
