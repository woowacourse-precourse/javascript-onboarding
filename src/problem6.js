function problem6(forms) {
  let Array = [];
  let arr = [];
  let email = [];
  for (let i = 0; i < forms.length; i++) {
    //이름만 추출하기
    Array.push(forms[i][1]);
  }
  for (let i = 0; i < Array.length; i++) {
    //제이가 들어간 문자열만 뽑아오기
    //빈 자리에 공백을 넣어주자.
    if (Array[i].includes("제이")) {
      arr.push(Array[i]);
    } else {
      arr.push("");
    }
  }
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1] === arr[i]) {
      email.push(forms[i][0]);
    }
  }
  return email.sort();
}

module.exports = problem6;
