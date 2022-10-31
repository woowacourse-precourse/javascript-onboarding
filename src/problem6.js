function problem6(forms) {
  var answer;
  let dict = used_pair(forms);
  //기능 3 -  오름차순으로 정렬하는 기능
  answer = new Set(check(forms, dict).sort());
  answer = Array.from(answer);
  return answer;
}

//기능 1 - 연속된 2개의 문자열 탐색
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

//기능 1 - 2개 이상 나온 2글자 연속값 저장하는 배열 만들기
function overlapped_word(dict) {
  for (let key in dict) {
    if (dict[key] < 2) delete dict[key];
  }
  return dict;
}

//기능 2 - 같은 글자가 연속적으로 포함된 닉네임을 판단하는 기능
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
