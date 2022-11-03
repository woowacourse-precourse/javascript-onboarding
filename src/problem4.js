function problem4(word) {
  let answer = '';
  const wordArr = word.split('');

  wordArr.forEach(v => {
    //기능목록 2-2 구현
    const ascNum = v.charCodeAt();
    //예외처리, 연산
    //기능목록 1-1 구현, 2-1구현
    if (ascNum >= 65 && ascNum <= 90) {
      answer += String.fromCharCode(155 - ascNum);
    } else if (ascNum >= 97 && ascNum <= 122) {
      answer += String.fromCharCode(219 - ascNum);
    } else if (ascNum === 32) answer += ' ';
  });

  return answer;
}

module.exports = problem4;
