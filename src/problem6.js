// **기능 요구 사항**
// 1. 같은 글자가 연속적으로 포함된 경우를 찾는다.
// 2. 같은 글자가 포함되어 있는 크루들의 이메일을 추출한다.
// 3. 정답 형식에 알맞게 반환한다.

function problem6(forms) {
  let arr = [];
  let tempCommonName = [];
  let getEmail = [];

  for (let i=0; i < forms.length; i++) {
    arr.push(forms[i])
    for (let j=0; j < arr[i][1].length-1; j++) {
      if (tempCommonName.includes(arr[i][1].substring(j, j+2))) {
        getEmail.push(arr[i][0])
        getEmail.push(arr[j][0])
      }
      tempCommonName.push(arr[i][1].substring(j, j+2))
    }
  }
  console.log(arr[0][1].includes("제이"));
  console.log(tempCommonName)
  console.log(getEmail)
}

module.exports = problem6;

problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]])
