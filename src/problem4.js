function problem4(word) {
  var answer;
  var changed = "";

  if (word.length < 1 || word.length > 1000) return -1;   //예외처리

  for (i = 0; i < word.length; i++) 
    changed = changed + String.fromCharCode(changeAlpha(word[i]));   //변환된 값을 changed에 넣기

  answer = changed;
  return answer;
}

//변환된 값 ch를 반환
function changeAlpha(word) {
  ch = word.charCodeAt(0);

  if (ch >= 65 && ch <= 90)   //대문자
    return 155 - ch;          //(65, 90), (66, 89), (67, 88)...  각 순서쌍의 합은 155, 즉 155-ch는 청개구리 알파벳 값과 동일
  else if (ch >= 97 && ch <= 122)   //소문자
    return 219 - ch;                //(97, 122) -> 97 + 122 = 219
  return ch;   //결과값 ch return
}

module.exports = problem4;

/*
- 알파벳인지 판별, 알파벳이 아니라면 그대로 변환 배열에 대입, 알파벳이라면 청개구리 사전을 통해 변환
- 소문자 대문자 판별 함수 생성
- (소문자의 경우) 대응되는 알파벳 리턴하는 함수 생성
- (대문자의 경우) 대응되는 알파벳 리턴하는 함수 생성
- 변환된 알파벳을 새로운 배열에 push
*/
