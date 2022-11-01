/* 
<풀이>
forms의 닉네임 형식이 있는 인덱스의 요소들만 반복적으로 꺼낸다.
요소들을 꺼내 2글자씩 잘라서 forms_Nickname_Matching의 빈 배열안에 넣는다.
forms_Nickname_Matching의 모든 항목의 인덱스를 첫 번째 항목의 인덱스와 비교해서 중복되는 요소를 찾는다.
중복되는 요소를 forms_Nickname_Set에 넣고 중복된 요소를 제거해서 1개만 남긴다.
포문으로 forms_Nickname_Set에 있는 요소를 forms의 닉네임요소에 있는지 확인한다.
있으면 forms의 닉네임 요소를 duplicate_nickname 배열안에 넣는다. 
forms안의 닉네임과 forms_duplicate_nickname안의 닉네임을 비교해서
같으면 forms안의 이메일형식을 forms_Email_address의 배열안에 넣는다.
마지막으로 이메일 형식을 오름차순으로 정렬한다.
*/

function problem6(forms) {
  let forms_Nickname_Matching = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      forms_Nickname_Matching.push(forms[i][1].substr(j, 2));
    }
  }

  let forms_Nickname_Set = forms_Nickname_Matching.filter(
    (item, index) => forms_Nickname_Matching.indexOf(item) !== index
  );
  forms_Nickname_Set = [...new Set(forms_Nickname_Set)];

  let forms_duplicate_nickname = [];
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].search(forms_Nickname_Set) >= 0) {
      forms_duplicate_nickname.push(forms[i][1]);
    }
  }

  let forms_Email_address = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms_duplicate_nickname.length; j++) {
      if (forms[i][1] === forms_duplicate_nickname[j]) {
        forms_Email_address.push(forms[i][0]);
      }
    }
  }
  forms_Email_address.sort();

  return forms_Email_address;
}

module.exports = problem6;
