// 기능 목록
// 1. 문자열을 순회하여 아스키코드를 확인하는 기능
// 2. 소문자를 반대로 변환하는 기능
// 3. 대문자를 반대로 변환하는 기능

// 문자열을 순회하여 아스키 코드로 변환
function circuitWord(word){
  // 결과 문자열을 담을 변수
  let result_word = '';

  // 문자열을 순회하여 아스키 코드로 변환
  for(let i = 0; i < word.length; i++){
    const char_code = word.charCodeAt(i);
    // 아스키 코드로 어떤 문자인지 판단하는 부분
    // 문자에 따라 반대로 변환하는 부분
  }
  return result_word;
}

function problem4(word) {
  // 결과값을 answer에 저장
  const answer = circuitWord(word);
  return answer;
}

module.exports = problem4;
