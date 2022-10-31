function problem4(word) {

  // 알파벳 대문자 A부터 Z까지 나열
  let upperCaseArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));

  // 알파벳 소문자 A부터 Z까지 나열
  let lowerCaseArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

  // 인풋값을 반대로 변환하여 담아줄 빈 배열 생성
  let result = [];

  // 'word'의 인풋값을 반대로 변환
  for(let i = 0; i < word.length; i++) {
    if(word[i] === ' ') result.push(' ');
    if(upperCaseArr.includes(word[i])) result.push(upperCaseArr[26-upperCaseArr.indexOf(word[i])-1]);
    if(lowerCaseArr.includes(word[i])) result.push(lowerCaseArr[26-lowerCaseArr.indexOf(word[i])-1]);
  }

  // 최종 결괏값을 문자열로 변환하여 리턴
  return result.join('');
}

module.exports = problem4;
