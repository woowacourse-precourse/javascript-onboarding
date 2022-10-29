function treeFrog(char) {
  // 문자를 숫자로 변환
  let num = char.charCodeAt();
  let result;
  // 대문자 일때,
  if (num >= 65 && num <= 90) {
    // A ~ M 일 때
    if (num <= 77) {
      num += (77 - num) * 2 + 1;
    }
    // M ~ Z 일 때,
    else {
      num -= (num - 78) * 2 + 1;
    }
  }
  // 소문자 일때,
  else if (num >= 97 && num <= 122) {
    // a ~ m 일 때
    if (num <= 109) {
      num += (109 - num) * 2 + 1;
    }
    // m ~ z 일 때
    else {
      num -= (num - 110) * 2 + 1;
    }
  }
  result = String.fromCharCode(num);
  return result;
}

function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    answer += treeFrog(word[i]);
  }
  return answer;
}

module.exports = problem4;
