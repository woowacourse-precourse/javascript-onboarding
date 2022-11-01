function problem6(forms) {
  var answer;
  const nickName = [];
  let duplicate = [];

  if (!isValid(forms)) return -1;   //예외처리

  for (i = 0; i < forms.length; i++) 
    nickName.push(forms[i][1]);

  for (i = 0; i < nickName.length; i++) 
    for (j = 0; j + 1 < nickName[i].length + 1; j++) {
      subStr = nickName[i].slice(j, j + 2)
      duplicate = checkDuplicate(subStr, nickName, forms, duplicate);
    }
  
  duplicate.sort();
  answer = duplicate;

  return answer;
}

function isValid(forms) {
  if (forms.length < 1 || forms.length > 10000) return false;
  if (!emailValid(forms)) return false;
  
  return true;
}

function emailValid(forms) {
  for (i = 0; i < forms.length; i++) {
    if (forms[i][0].length < 11 || forms[i][0].length > 20) return false;
    if (forms[i][0].indexOf('@') == -1) return false;

    divideEmail = forms[i][0].split("@");
    if (divideEmail[1] != "email.com") return false;
  }

  return true;
}

function checkDuplicate(subStr, nickName, forms, duplicate) {
  for (let k = i + 1; k < nickName.length; k++) 
    if (nickName[k].includes(subStr)) 
      duplicate = makeDupArr(nickName[i], forms, duplicate);
      
  return duplicate;
}

function makeDupArr(nickName, forms, duplicate) {
  if (forms[i][1] === nickName) 
    if (duplicate.indexOf(forms[i][0]) < 0)   //duplicate에 없다면 추가
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
