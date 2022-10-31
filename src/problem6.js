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
  console.log(pair_obj);
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
