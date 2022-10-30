function problem6(forms) {
  const mailForms = forms.map((i) => i[0]);
  const nameForms = forms.map((i) => i[1]);
  const validMailForms = mailForms.map((i) => isValidMail(i));
  const validNameForms = nameForms.map((i) => isValidName(i));
  const validForms = classifyValid(forms, validMailForms, validNameForms);
  const duplicatedNames = checkDuplicate(nameForms);
  const duplicatedForms = validForms.filter((v, i) => {
    const name = v[1];
    return duplicatedNames.includes(name);
  });
  const answer = duplicatedForms.map((i) => i[0]).sort();

  return answer;
}

module.exports = problem6;

/* classify  */
const classifyValid = (forms, validMailForms, validNameForms) => {
  const newArray = new Array(forms.length);
  newArray.fill(null);
  const validForms = newArray.map((v, i) => {
    let resultValue;
    if (validMailForms[i] && validNameForms[i]) {
      resultValue = forms[i];
    } else {
      resultValue = false;
    }

    return resultValue;
  });

  return validForms;
};

const checkDuplicate = (nameForms) => {
  let resultArray = [];
  const srcArray = nameForms.map((v) => {
    const sliceArray = [];
    const len = v.length - 2;
    for (let i = 0; i <= len; i++) {
      const srcText = v.slice(i, i + 2);
      sliceArray.push(srcText);
    }

    return sliceArray;
  });

  const len = srcArray.length - 1;
  for (let i = 0; i <= len - 1; i++) {
    for (let j = 0; j <= srcArray[i].length - 1; j++) {
      for (let k = i + 1; k <= len; k++) {
        const isDuplicate = srcArray[k].includes(srcArray[i][j]);
        if (isDuplicate) {
          resultArray.push(nameForms[k], nameForms[i]);
        }
      }
    }
  }

  resultArray = resultArray.filter((v, i) => resultArray.indexOf(v) === i);

  return resultArray;
};

/* Nickname */
const isValidName = (name) => {
  const KRResult = isKR(name);
  const lengthResult = isValidLength(name, 1, 20);
  const resultValue = KRResult && lengthResult;

  return resultValue;
};

const isKR = (text) => {
  if (!text) return false;

  let resultValue;
  const rKR = /[\u3131-\uD79D]/giu;
  const regexResult = text.match(rKR);
  if (!regexResult) return false;

  if (regexResult.length === text.length) {
    resultValue = true;
  } else {
    resultValue = false;
  }

  return resultValue;
};

/* Mail */
const isValidMail = (mail) => {
  const domainResult = isValidDomain(mail);
  const lengthResult = isValidLength(mail, 11, 20);
  const resultValue = domainResult && lengthResult;

  return resultValue;
};

const isValidDomain = (mail) => {
  const rMail = /@email.com/g;
  const resultValue = Boolean(mail.match(rMail));

  return resultValue;
};

const isValidLength = (string, min, max) => {
  let resultValue;
  if (min <= string.length && string.length < max) {
    resultValue = true;
  } else {
    resultValue = false;
  }

  return resultValue;
};

/*
 - 신청받은 닉네임 중 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일 목록을 return.
 - 중복 : 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함.

 ### 이메일
 1) 전체 길이는 11자 이상 20자 미만.
 2) 이메일 형식 체크 및 이메일은 email.com 도메인으로만 제한.


 ### 닉네임
 1) 닉네임은 한글만 가능
 2) 길이는 1자 이상 20자 미만

 ### return
 1) 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬 후, 중복은 제거

 ---
 #구현할 것

 2차원 배열 받아서 Array[0]"이메일"과 Array[1] 닉네임을 따로 처리해야함.
 ### 이메일
 1) 전체 길이는 11자 이상 20자 미만.
 if (11 <= mail.length && mail.length < 20) {
    return true;
 }

 2) 신청할 수 있는 이메일은 email.com 도메인으로만 제한.
 regex 사용.
 
 3) 이메일 형식 체크
 regex 사용.

 
 ### 닉네임
 1) 닉네임은 한글만 가능
 ASCII코드 확인
 'ㄱ'.charCodeAt(0) >= 12593

 2) 길이는 1자 이상 20자 미만
 if (1 <= nickName.length && nickName.length < 20) {
    return true;
 }
 
 3) 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬 후, 중복은 제거
 

 */
