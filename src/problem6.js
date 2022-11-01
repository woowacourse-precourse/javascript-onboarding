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
 * @param {*} str1 
 * @param {*} str2 
 * @returns  str2를 기준으로 중복되는 문자 배열를 리턴한다.
 */
function checkOverlap(str1, str2) {
  console.log(str1, ' ', str2)

  let array1 = [...str1];
  let array2 = [...str2];
  let continuity1 = [];
  let continuity2 = [];
  let indexOverlap = [];

  let result = [];

  array1.forEach((arr, index) => {
    if (array2.includes(arr)) {
      continuity1.push(index);
      //문제점. '엠제이가 이상해' 에서 '이' 처럼 여러번들어가면 이런코드로는 안된다.
      continuity2.push(array2.indexOf(arr));
    }
    console.log('@@@@@@@@@@@@', continuity1, ' / ', continuity2);
  })

  // 오름차순 연속성 확인. 한구간이라도 오름차순이면
  if (continuity1.length !== 0) {
    for (let i = 0; i < continuity1.length; i++) {
      if (continuity2[i] + 1 == continuity2[i + 1]) {
        indexOverlap.push(continuity2[i]);
        result.push(array2[indexOverlap[i]])
      }
    }

    if (indexOverlap.length != 0) {

      indexOverlap.push(indexOverlap[indexOverlap.length - 1] + 1)
      result.push(array2[indexOverlap[indexOverlap.length - 1]])
      return result;
    }
    return null;
  }

  else {
    return null;
  }
}




function problem6(forms) {
  let answer = [];

  if (isException(forms)) {
    return -1;
  }

  //checkOverlap함수에서 리턴값이 있다면 중복을 찾은 것으로 answer에 추가한다.
  forms.forEach((form, index) => {
    console.log('\n');
    for (let i = index; i < forms.length - 1; i++) {
      if (checkOverlap(form[1], forms[i + 1][1])) {
        answer.push(form[0]);
        answer.push(forms[i + 1][0]);
      }
    }
  });
  //result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
  answer = Array.from(new Set(answer));
  answer.sort();
  console.log(answer);

  return answer;
}


problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

module.exports = problem6;
