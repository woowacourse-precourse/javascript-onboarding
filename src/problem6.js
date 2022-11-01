function problem6(forms) {
  var answer;

  // 이메일 오름차순 및 중복 제거

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

// 해당 이메일 return 함수
function whatEmail(nick) {}

module.exports = problem6;
