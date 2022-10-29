function problem6(forms) {
  var answer;
  
  // 두 글자 이상 연속적으로 중복되는 문자의 수를 찾기 위한 MAP 
  var map = new Map(); 
  var duplicationList = new Array();

  for (var form of forms) {
    var name = String(form[1]);
    for (var i = 0; i < name.length -1; i++) {
      var twoName = name.substring(i, i+2);
      var count = map.has(twoName) ? map.get(twoName) + 1 : 1;
      map.set(twoName, count);
      if (count > 1) {
        duplicationList.push(twoName);
      }
    }
  }

  // forms 기준으로 중복된 두 글자를 포함하는 닉네임 찾아서 이메일 SET(중복 제외) 저장
  var set = new Set();
  for (var form of forms) {
    var name = String(form[1]);
    var email = form[0];

    for (var duplicationName of duplicationList) {
      if (name.includes(duplicationName)) {
        set.add(email);
      }
    }
  }

  // 정렬 및 list로 리턴하기 위해 set -> Array로 변경
  answer = Array.from(set);
  return answer.sort();
}

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));

module.exports = problem6;
