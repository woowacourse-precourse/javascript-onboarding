/* 
 * Features
 * 1. JSON 폼으로 변경하는 기능
 * 2. 문자의 조합을 찾아주는 기능
 * 3. 문자의 조합 중복 검사
 *  
 * Exceptions
 * 1. 크루는 1명 이상 10,000명 이하
 * 2. 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
 * 3. 신청할 수 있는 이메일은 email.com 도메인으로만 제한
 * 4. 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만
 * 5. result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거
 */
const changeToJSON = originForm => {
  let newForm = [];
  originForm.map(item => {
    newForm.push({
      email: item[0], 
      nickname: item[1],
      isDuplicated: false
    })
  })

  return newForm;
}

const getCombinations = str =>{
  let combinations = [];
  for (let i = 0 ;i < str.length; i++) {
    for(let j = i + 1; j< str.length + 1; j++) {
      if (str.slice(i, j).length > 1) {
        combinations.push(str.slice(i , j));
      }
    }
  }

  return combinations;
}

const setIsDuplicated = forms => {
  for (let i = 0; i < forms.length; i++) {
    forms[i].nameCombinations.map(char => {
      for (let j = i + 1; j < forms.length; j++) {
        if (forms[j].nameCombinations.includes(char)) {
          forms[i].isDuplicated = true;
          forms[j].isDuplicated = true;
        }
      }
    })
  }
}

function problem6(forms) {
  let answer = [];
  forms = changeToJSON(forms);  
  forms.map(user => {
    user.nameCombinations = getCombinations(user.nickname);
  })
  setIsDuplicated(forms);
  forms.map(user => {
    if (user.isDuplicated) {
      answer.push(user.email);
    }
  })

  return answer.sort();
}

module.exports = problem6;

