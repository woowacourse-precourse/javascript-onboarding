function problem6(forms) {
  var answer;
  let nickname = [];
  let pair_obj = {}; //두글자씩 나눠서 {"제이" : [0,1, ...]} <=> 닉네임에 "제이"를 포함한 사람의 인덱스 로 구성될 객체
  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
    for (let j = 0; j < nickname[i].length - 1; j++) {
      let pair_char = nickname[i].slice(j, j + 2); //두글자씩 자르기
      let tmp = pair_obj[pair_char];
      pair_obj[pair_char] = tmp ? [...pair_obj[pair_char], i] : [i];
    }
  }
  let email_idx_set = new Set();
  for (let pair of Object.keys(pair_obj)) {
    if (pair_obj[pair].length > 1) {
      //key에 있는 배열의 크기가 1 이상이면-> 해당 문자열 겹치는 사람 2명이상 -> 이메일 보내야함
      pair_obj[pair].forEach((el) => {
        email_idx_set.add(el);
      });
    }
  }
  console.log(email_idx_set);
  return answer;
}

module.exports = problem6;

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
