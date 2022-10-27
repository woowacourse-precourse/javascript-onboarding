/*
구현목록
1. 결과가 담길 배열 선언하기
2. ASCII 코드로 변환된 문자를 통해 조건문 비교하기
3. 조건에 맞는 문자로 변환한 후 result 배열에 저장하기
4. result 배열을 하나의 문자열로 바꾼 후 return 하기
*/

function problem4(word) {
  const result = [];

  for (let i=0; i<word.length; i++) {
    const ascii = word.charCodeAt(i);
    if (ascii === 32) {
      result.push(' ');
    } else if (ascii >= 65 && ascii <= 90) {
      result.push(String.fromCharCode(90 - (ascii - 65)));
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(String.fromCharCode(122 - (ascii - 97)));
    } else {
      result.push(word[i]);
    }
  }

  return result.join('');
}

module.exports = problem4;
