function problem4(word) {
  // 결과를 담을 변수 선언
  let result = '';

  // 반대로된 알파벳 문자열 선언
  let alphabetReverse = 'zyxwvutsrqponmlkjihgfedcba';

  for (let i = 0; i < word.length; i++) {
    // 예외사항 - 공백일 때
    if (word[i] === ' ') result += ' ';
  }
}

module.exports = problem4;
