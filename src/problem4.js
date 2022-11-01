function problem4(word) {
  let answer = '';

  for (let i of word) {
    //문자열 안에 있는 문자만큼 반복
    const convertWord = i.charCodeAt(); //해당 문자를 아스키코드로 변환
    let resultWord = '';
    if (convertWord >= 65 && convertWord <= 90)
      //해당 문자가 대문자일때
      resultWord = 90 - convertWord + 65; //해당하는 문자로 변환
    else if (convertWord >= 97 && convertWord <= 122)
      //해당 문자가 소문자일때
      resultWord = 122 - convertWord + 97; //해당하는 문자로 변환
    else resultWord = convertWord; //그 외에는 그대로
    answer = answer + String.fromCharCode(resultWord); //문자열로 바꾸어 결과 반환
  }

  return answer;
}

module.exports = problem4;
