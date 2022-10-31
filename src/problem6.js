// 기능 요구 사항
// 닉네임 중 같은 글자가 연속적으로 포함 될 경우 닉네임 사용을 제한!
// 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일을 return
// 단, return 할 때는 문자열을 오름차순으로 정렬 & 중복은 제거한다.

function problem6(forms) {
  let nameArr = [];
  let result = [];
  for (let i = 0; i < forms.length; i++) {
    nameArr.push(forms[i][1]);
  }

  for (let i = 0; i < nameArr.length; i++) {
    for (let j = i+1; j < nameArr.length; j++) {
      nameStr1 = nameArr[i].toString();
      nameStr2 = nameArr[j].toString();
      for (let k = 0; k < nameStr1.length-1; k++) {
        for (let z = 0; z < nameStr2.length-1; z++) {
          if (nameStr1[k] == nameStr2[z]) {
            if (nameStr1[k+1] == nameStr2[z+1]) {
              result.push(forms[i][0], forms[j][0]);
            }
          }
        }
      }
    }
  }

  answer = [...new Set(result)].sort();
  return answer;
}
const forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ];
problem6(forms);
module.exports = problem6;
