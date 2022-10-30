/* 
 * Features
 * 1. 닉네임 중 같은 글자가 연속적으로 중복되는 지원자 검사
 * 2. 이메일 목록 리턴
 *  
 * Exceptions
 * 1. 크루는 1명 이상 10,000명 이하
 * 2. 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
 * 3. 신청할 수 있는 이메일은 email.com 도메인으로만 제한
 * 4. 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만
 * 5. result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거
 */
const setArrToJSON = arr => {
  let result = [];

  arr.map(item => {
    result.push({
      email: item[0], 
      nickname: item[1],
      isDuplicate: false
    })
  })

  return result;
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

function problem6(forms) {
  let answer = setArrToJSON(forms);  
  
  answer.map((user)=>{
    var c = getCombinations(user.nickname);
    user.nameCombinations = c;
  })
  
  for(let i = 0; i < answer.length; i++) {
    answer[i].nameCombinations.map(char=>{
      for(let j = i + 1; j < answer.length; j++) {
        if(answer[j].nameCombinations.includes(char)){
          answer[i].isDuplicate = true;
          answer[j].isDuplicate = true;
        }
      }
    })
  }

  let newArr = answer.filter((item)=>item.isDuplicate)

  let newArr2 = [];
  
  newArr.map((item)=>{
    newArr2.push(item.email)
  })

  return newArr2.sort();
}

module.exports = problem6;

