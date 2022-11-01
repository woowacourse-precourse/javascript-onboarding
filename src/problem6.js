// 2022 Kimjungwon 우아한테크코스 문제풀이 6

// forms의 내부가 제한사항에 맞는지 확인한다.
function formsCheck(forms) {
  const regexEmail = /@email.com/g;
  const regexKr = /[ㄱ-ㅎ가-힣]/g;
  for (let i = 0; i < forms.length; i++) {
    //이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
    if (forms[i][0].length < 11 || forms[i][0].length > 19) {
      return -1;
    }
    //신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
    else if (!forms[i][0].match(regexEmail)) {
      return -1;
    }
    //닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
    else if (!forms[i][1].match(regexKr)) {
      return -1;
    }
    else if (forms[i][1] < 1 || forms[i][1] > 19) {
      return -1;
    }
  }
}

// 입력값이 제한사항에 부합한지 확인한다.
function isException(forms) {
  // 크루는 1명이상 10,000명 이하이다.
  if (forms.length < 1 || forms.length > 10000) {
    return true;
  }
  else if (formsCheck(forms) == -1) {
    return true;
  }
  return false;
}

/**
 * 
 * 연속된 중복이 있는지 확인하는 함수
 * 
 * 두개의 닉네임 str1, str2를 start,end를 통해서 str1의 문자열중 str2에 해당하는 것이 있는지 찾는다.
 * @param {*} str1 
 * @param {*} str2 
 * @returns  str2를 기준으로 중복되는 문자 배열를 리턴한다.
 */
function isOverlap(str1, str2) {

  let result = "";

  //두개의 닉네임을 비교해서 같은 문자열이 있다면 result에 아무값을 넣어준다.
  for (let start = 0; start < str1.length - 1; start++) {
    for (let end = 2; end < str1.length + 1; end++) {
      if (str2.indexOf(str1.substr(start, end)) !== -1) {
        result = 'true';
      }
    }
  }
  //값이 없으면 false
  if (!result) {
    return false;
  }
  //값이 있으면 true
  else {
    return true;
  }
}

function problem6(forms) {
  let answer = [];

  if (isException(forms)) {
    return -1;
  }

  //isOverlap()이 true라면 중복을 찾은 것으로 이메일을 answer에 추가한다.
  forms.forEach((form, index) => {
    for (let i = index; i < forms.length - 1; i++) {
      if (isOverlap(form[1], forms[i + 1][1])) {
        answer.push(form[0]);
        answer.push(forms[i + 1][0]);
      }
    }
  });
  //result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
  answer = Array.from(new Set(answer));
  answer.sort();
  console.log('answer', answer);

  return answer;
}


module.exports = problem6;
