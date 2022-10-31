function restrictions(forms) {}

function problem6(forms) {
  var answer = [];
  var nickname = [];
  var check = [];

  // 닉네임만 추출
  for (var i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }

  // 닉네임의 이어진 2글자씩 저장
  for (var j = 0; j < nickname.length; j++) {
    if (nickname[j].length == 1) continue;
    for (var k = 0; k < nickname[j].length - 1; k++) {
      check.push(nickname[j].slice(k, k + 2));
    }
  }

  // 같은 단어가 3개 이상이면 중복인 것으로 간주
  for (var l = 0; l < nickname.length; l++) {
    var count = 0;
    for (var m = 0; m < check.length; m++) {
      if (nickname[l].includes(check[m])) {
        count += 1;
      }
    }
    if (count > 2) {
      answer.push(forms[l][0]);
    }
  }
  answer = answer.sort();

  return answer;
}

module.exports = problem6;
