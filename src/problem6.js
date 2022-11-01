// test sample 추가
console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

function problem6(forms) {
  var answer = [];
  var nick = forms.map(([_, id]) => id);
  var doubleNick = checkDouble(nick);

  // 이메일 오름차순 및 중복 제거
  forms.forEach(([email, name]) => {
    if (doubleNick.some((v) => name.includes(v))) {
      answer.push(email);
    }
  });

  return answer;
}

// 같은 글자(한글) 연속 check 함수
function checkDouble(nick) {
  // stack 선언
  let nickArr = [];

  for (let i = 0; i < nick.length; i++) {
    // 두 글자씩 자르기
    let twoSlice = nick[i].slice(i, i + 2);
    // 자신 제외
    let exSelf = nick.filter((v) => v !== nick[i]);

    // 자른 두 글자 포함 유무 check
    if (exSelf.some((v) => v.includes(twoSlice))) {
      nickArr.push(twoSlice);
    }
  }

  return nickArr.filter((v) => v !== "");
}

module.exports = problem6;
