//크루의 수 제한 검사
function isCrewLimit(num) {
  if (num >= 1 && num <= 10000) return true;
  else return false;
}

//이메일 형식 검사
function isNormalEmail(forms) {
  for (let i = 0; i < forms.length; i++) {
    let email = forms[i][0];

    if(email.length>=11 && email.length<20) {
      var reg_email = /^([0-9a-zA-Z_\.-]+)@email.com$/;

      if(reg_email.test(email)) return true;
      else return false;

    } else return false;
  }
}

//닉네임 형식 검사
function isNormalNickname(forms) {
  for (let i = 0; i < forms.length; i++) {
    let nickname = forms[i][1];

    //닉네임 길이
    if (nickname.length >= 1 && nickname.length < 20) {

      //특수문자
      const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
      if (regExp.test(nickname)) {
        return false;
      }
      else {
        //숫자
        const regExp = /[0-9]/g;
        if (regExp.test(nickname)) {
          return false;
        }
        else {
          //영문
          const regExp = /[a-zA-Z]/g;
          if (regExp.test(nickname)) {
            return false;
          }
          else continue;
        }
      }
    }
    else {
      return false;
    }
  }

  return true;

}

//닉네임 중복되는 두글자 찾기
function cutTwoWords(forms) {
  let twoWords = [];
  let duplicatedTwoWords = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      if (twoWords.includes(forms[i][1].substr(j, 2))) {
        duplicatedTwoWords.push(forms[i][1].substr(j, 2));
      } else {
        twoWords.push(forms[i][1].substr(j, 2));
      }
    }
  }

  // 배열의 중복 제거
  const resultNicknames = duplicatedTwoWords.filter((element, index) => {
    return duplicatedTwoWords.indexOf(element) === index;
  });
  return resultNicknames;
}

//중복된 닉네임을 사용하는 크루의 이메일을 배열에 저장
function isDuplication(twoWords, forms) {
  let crews = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      if (twoWords.includes(forms[i][1].substr(j, 2))) {
        crews.push(forms[i][0]);
      }
    }

  }

  //배열의 중복 제거
  const resultEmails = crews.filter((element, index) => {
    return crews.indexOf(element) === index;
  });
  return resultEmails;
}

//email 오름차순 정렬
function sortingEmail(emails) {
  let sortedEmails = [];
  sortedEmails = emails.sort();

  return sortedEmails;
}


function problem6(forms) {
  var answer;

  //크루 인원수 검사
  if (isCrewLimit(forms.length)) {

    //닉네임 형식 검사
    if (isNormalNickname(forms)) {

      //이메일 형식 검사
      if(isNormalEmail(forms)) {

        //닉네임에 중복되는 두글자 찾기
        let twoWordsArr = cutTwoWords(forms);

        //중복된 닉네임을 갖고 있는 크루의 이메일 배열에 저장
        let duplicatedCrews = isDuplication(twoWordsArr, forms);

        //result에 해당하는 이메일 오름차순 정렬
        let result = sortingEmail(duplicatedCrews);

        answer = result;
        return answer;
      }
      else {
        console.log("이메일 형식이 올바르지 않습니다.");
        return;
      }
    }
    else {
      console.log("닉네임 형식이 올바르지 않습니다.");
      return;
    }
  }
  else {
    console.log("크루는 1명 이상 10,000명 이하여야 합니다.");
    return;
  }

}

module.exports = problem6;

