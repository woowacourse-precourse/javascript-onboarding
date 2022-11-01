function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

/* 
1. forms의 루프를 돌면서
2. forms[i][1]를 앞에서부터 돌면서 연속 두 글자 추출
3. 겹칠 수 있는 대상 list에 forms에서 자신을 뺀 나머지를 복사해놓고
4. 두 글자가 닉네임에 포함된 크루의 이메일을 result에 추가
5. 겹칠 수 있는 대상 list에서 해당 크루 제외
6. list 다 비울 때까지 or 닉네임 끝까지 추출할때까지 2~5 반복
7. result 중복 제거
8. result 오름차순 정렬  
*/
