// **기능 요구 사항**
// 1. 같은 글자가 연속적으로 포함된 경우를 찾는다.
// 2. 같은 글자가 포함되어 있는 크루들의 이메일을 추출한다.
// 3. 정답 형식에 알맞게 반환한다.

function problem6(forms) {
  let arr = [];
  let tempCommonName = [];

  for (let i=0; i < forms.length; i++) {
    arr.push(forms[i])
    for (let j=0; j < arr[i][1].length-1; j++) {
      tempCommonName.push(arr[i][1].substring(j, j+2))
    }
  }
  console.log(arr[0][1].includes("제이"));
  console.log(tempCommonName)
}

module.exports = problem6;

problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]])
