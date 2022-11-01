/**
 * 반대 알파벳의 아스키코드를 반환해주는 함수
 * @param {number} ascii 아스키코드
 * @returns 반대 아스키코드
 */
function frog(ascii){
  if(ascii >= 56 && ascii <= 90) // 대문자
    return 155 - ascii;
  if(ascii >= 97) // 소문자
    return 219 - ascii;
  else return 32; // 공백
}

function problem4(word) {
  let frogWord = '';

  // 문자 하나씩 변환
  for(let i=0;i<word.length;i++){
    // 문자의 아스키코드 구하기
    const ascii = word.charCodeAt(i);

    // 반대 아스키코드의 문자 구해 반대 분자열에 추가
    frogWord += String.fromCharCode(frog(ascii));
  }

  return frogWord;
}

module.exports = problem4;
