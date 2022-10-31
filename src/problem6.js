function problem6(forms) {
  var answer;

  const nickName = [];

  for (i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1]);
    for (j = 0; j + 1 < nickName[i].length; j++) 
        subStr = nickName[i].slice(j, j + 2);
  }

  return answer;
}

module.exports = problem6;

/*
1. 첫 번째 닉네임부터 2글자씩 substring으로 만들기
2. substring이 닉네임에 포함되는지 검사
3. 만약 substring을 포함한다면 중복 닉네임의 이메일을 배열 duplicate에 저장

4. duplicate 정렬 및 출력
*/
