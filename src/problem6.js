function restrictions(forms) {
  // 이메일 확인
  for (var n = 0; n < forms.length; n++) {
    var email = forms[n][0];
    var email_size = email.length;

    // email.com 형식 체크
    if (email.slice(-10) != '@email.com') {
      delete forms[n][0];
    }

    // email 길이 체크
    if (11 > email_size || email_size >= 20) {
      delete forms[n][0];
    }
  }

  // 닉네임 확인
  for (var o = 0; o < forms.length; o++) {
    var nickname = forms[o][1];
    var nickname_size = nickname.length;
    var kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    // 닉네임 길이 체크
    if (1 > nickname_size || nickname_size >= 20) delete forms[o][1];
    // 닉네임 형식 체크
    for (var p = 0; p < nickname_size; p++) {
      if (kor.test(nickname[p]) == false) delete forms[o][1];
    }
  }

  // delete로 지운 undefined 제거
  forms = forms.filter(
    (form) => !(form[0] == undefined || form[1] == undefined)
  );

  return forms;
}

function problem6(forms) {
  var answer = [];
  var nickname = [];
  var check = [];

  // 제한 사항 확인
  forms = restrictions(forms);

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

  // 오름차순 정렬
  answer = answer.sort();

  return answer;
}

module.exports = problem6;
