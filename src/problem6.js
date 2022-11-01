function checkNickname(nickname) {
  const allowedNickname = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  if (allowedNickname.test(nickname) === false) {
    throw new Error("닉네임은 한글로만 작성해주세요");
  }
}
checkNickname(nickname);

function checkEmailVaild(email) {
  const isEmailValid = /[a-z0-9]+@+email.com$/;
  if (email.length < 11 || email.length > 19) {
    throw new Error("이메일이 길이는 11자 이상 20자 미만이어야 합니다");
  }
  if (isEmailValid.test(email) === false) {
    throw new Error("이메일의 형식은 @email.com입니다.");
  }
}
checkEmailVaild(email);

// 이중 배열에서 이름 배열을 만들어주는 함수
function crewNameArray(duplicateArray) {
  let crewNameArr = [];

  duplicateArray.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr;
}

// 이름 배열에서 두 글자만 잘라 새로운 배열에 리턴해주는 함수
function cutTwoLetterArray(array) {
  const crewNameArr = crewNameArray(array);
  let twoLetterNameArr = [];

  crewNameArr.forEach((name) => {
    let i = 0;

    for (; i < name.length - 1; i++) {
      twoLetterNameArr.push(name.slice(i, i + 2));
    }
  });
  return twoLetterNameArr;
}

// 두 글자 배열을 입력받아 중복된 값을 배열에 담아 리턴해주는 함수
function checkDuplicateArray(array) {
  let duplicateArray = [];
  let toCheckArray = [];

  array.forEach((twoLetterName) => {
    if (toCheckArray.includes(twoLetterName) === true) {
      duplicateArray.push(twoLetterName);
    }
    if (toCheckArray.includes(twoLetterName) === false) {
      toCheckArray.push(twoLetterName);
    }
  });
  return duplicateArray;
}

// 이중 배열에 입력받은 중복 배열이 있을 때 해당 crewname의 email을 반환하는함수
function problem6(forms) {
  const twoLetterNameArr = cutTwoLetterArray(forms);
  const duplicateArray = checkDuplicateArray(twoLetterNameArr);
  let answer = [];

  forms.forEach((nameAndEmail) => {
    let i = 0;

    for (; i < nameAndEmail.length; i++) {
      if (duplicateArray.includes(nameAndEmail[1].slice(i, i + 2))) {
        answer.push(nameAndEmail[0]); //전체 배열에서 중복된 이름이 있는 지 확인 후 있다면 그 이메일을 반환하는 함수
      }
    }
  });

  return answer.sort();
}

module.exports = problem6;
