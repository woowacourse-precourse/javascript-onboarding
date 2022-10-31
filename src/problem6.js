function problem6(forms) {
  var answer;

  const nickName = [];
  let duplicate = [];

  for (i = 0; i < forms.length; i++) 
  nickName.push(forms[i][1]);

  for (i = 0; i < nickName.length; i++) 
    for (j = 0; j + 1 < nickName[i].length; j++) {
      subStr = nickName[i].slice(j, j + 2)
      duplicate = checkDuplicate(subStr, nickName, duplicate);
    }

  return answer;
}

function checkDuplicate(subStr, nickName, duplicate) {
  for (let k = i + 1; k < nickName.length; k++) 
    if (nickName[k].includes(subStr)) 
      duplicate = makeDupArr(nickName[i], forms, duplicate);

  return duplicate;
}

function makeDupArr(nickName, forms, duplicate) {
  for (let i = 0; i < nickName.length; i++) 
    if (forms[i][1] === nickName) 
      if (duplicate.indexOf(forms[i][0]) < 0)    //duplicate에 없다면 추가
        duplicate.push(forms[i][0]);
      
  return duplicate;
}

module.exports = problem6;

/*
1. 첫 번째 닉네임부터 2글자씩 substring으로 만들기
2. substring이 닉네임에 포함되는지 검사
3. 만약 substring을 포함한다면 중복 닉네임의 이메일을 배열 duplicate에 저장

4. duplicate 정렬 및 출력
*/
