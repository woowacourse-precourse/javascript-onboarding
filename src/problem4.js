function problem4(word) {
  var answer;
  var changed;

  for (i = 0; i < word.length; i++) 
    changed.push(isAlpha(word[i]));   //변환된 값을 changed에 넣기

  return answer;
}

//변환된 값 ch를 반환
function isAlpha(word) {
  ch = word.charCodeAt(0);

  if (ch >= 65 && ch <= 90)   //대문자
    ch = upperAlphaChange(ch);
  else if (ch >= 97 && ch <= 122)   //소문자
    ch = lowerAlphaChange(ch);
  
  return ch;   //결과값 ch return
}

function upperAlphaChange(ch) {
  //(65, 90), (66, 89), (67, 88)...이렇게 대응
  //각 순서쌍의 합은 155, 즉 155-ch return
  return 155 - ch;
}

module.exports = problem4;

/*
- 알파벳인지 판별, 알파벳이 아니라면 그대로 변환 배열에 대입, 알파벳이라면 청개구리 사전을 통해 변환
- 소문자 대문자 판별 함수 생성
- (소문자의 경우) 대응되는 알파벳 리턴하는 함수 생성
- (대문자의 경우) 대응되는 알파벳 리턴하는 함수 생성
- 변환된 알파벳을 새로운 배열에 push
*/
