function problem6(forms) {
  var answer;
  let dict = used_pair(forms);
  answer = new Set(check(forms, dict).sort());
  answer = Array.from(answer);
  return answer;
}

//연속된 2개의 문자열 탐색
function used_pair(forms) {
  let dict = {};
  forms.map((form) => {
    let email = form[0];
    let name = form[1];
    for (let i = 0; i < name.length - 1; i++) {
      let divided_name = name.substring(i, i + 2);
      if (!(divided_name in dict)) dict[divided_name] = 1;
      else dict[divided_name] += 1;
    }
  });
  dict = overlapped_word(dict);
  return dict;
}

//2개 이상 나온 2글자 연속값 저장하는 배열 만들기
function overlapped_word(dict) {
  for (let key in dict) {
    if (dict[key] < 2) delete dict[key];
  }
  return dict;
}

//해당 닉네임이 겹치는 닉네임인지 확인하고, 이메일 출력하기
function check(forms, dict) {
  let ans = [];
  forms.map((form) => {
    let email = form[0];
    let name = form[1];
    for (let i = 0; i < Object.keys(dict).length; i++) {
      if (name.includes(Object.keys(dict)[i])) ans.push(email);
    }
  });
  return ans;
}
module.exports = problem6;
