// forms = [
//   ["jm@email.com", "제이엠"],
//   ["jason@email.com", "제이슨"],
//   ["woniee@email.com", "워니"],
//   ["mj@email.com", "엠제이"],
//   ["nowm@email.com", "이제엠"],
// ];

function problem6(forms) {
  patternCheck(forms);
  let result = [];
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].includes(duplicateCheck(forms))) {
      result.push(forms[i][0]);
    }
  }
  let sortResult = result.sort();
  return sortResult;

  function patternCheck(forms) {
    let pattern_korea = /^[가-힣]{1,20}$/;
    let pattern_email = /^[a-z]{1,11}@email.com+$/;

    for (let i = 0; i < forms.length; i++) {
      if (
        !pattern_email.test(forms[i][0]) &&
        !pattern_korea.test(forms[i][1])
      ) {
        return "이메일 또는 닉네임의 형식이 맞지 않습니다!";
      }
    }
    return forms;
  }

  function duplicateCheck(forms) {
    let nickextract = [];

    for (let i = 0; i < forms.length; i++) {
      nickextract.push(forms[i][1]);
    }

    let duplicateNick = [];
    for (let j = 0; j < nickextract.length; j++) {
      for (let k = 0; k < nickextract[j].length; k++) {
        duplicateNick.push(nickextract[j].slice(k, k + 2));
      }
    }
    return duplicateNick
      .filter((v, i) => v.length >= 2 && duplicateNick.indexOf(v) !== i)
      .filter((v, i, arr) => arr.indexOf(v) === i);
  }
}

module.exports = problem6;

// 닉네임 두글자 이상 연속적으로 순서에 맞춰 포함되면 중복 간주
// 닉네임은 한글만 가능, 1자 이상 20자 미만
//  => 닉네임 확인이 필요;

// 이메일은 형식에 부합 @gmail.com 이 포함 11자 이상 20자 미만

// return 값에 이메일에 해당하는 부분의 문자열을 오름차순을 정렬, 닉네임은 제거
