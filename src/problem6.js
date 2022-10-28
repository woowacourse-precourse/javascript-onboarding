function problem6(forms) {
  //검사 배열
  let checkArr = [];
  const answer = [];
  forms.map((id, i) => {
    console.log(checkAnoterName(nickSplit(id[1]), forms, i));
  });

  return answer;
}

// 1. 닉네임을 이메일과 분리하는 기능
function nickEmailSplit(id) {
  const idArr = id.split("@");
  return idArr[0];
}

//2.한글 닉네임을 2글자 이상으로 분리하는 기능
function nickSplit(id) {
  const name = [];

  for (let i = id.length; i > 1; i--) {
    for (let j = 0; i - j > 1; j++) {
      name.push(id.slice(j, i));
    }
  }

  return name;
}

//3.분리한 닉네임을 다른 닉네임과 검사하는 기능
function checkAnoterName(check, form, index) {
  //id: 검사할 닉네임 , arr: 원본 배열 , index : 원본 인덱스 ,
  const res = [];
  check.map((str) => {
    const re = new RegExp(str);
    form.map((check) => {
      if (form[index] !== check) {
        if (re.test(check[1])) res.push(check[0]);
      }
    });
  });

  return res;
}

//4.이메일에서 영어 아이디 기준으로 오름 차순으로 정렬 후 중복은 제거
function emailSortAndDupDel(arr) {
  return arr.sort((a, b) => nickSplit(a) - nickSplit(b));
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;
