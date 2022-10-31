function getUserName(userInfo) {
  const userNameArr = [];
  userInfo.map((user) => userNameArr.push(user[1]));
  return userNameArr;
}

function cutUserName(userNameArr) {
  const cutUserNameArr = [];

  userNameArr.map((userName) => {
    for (let i = 0; i < userName.length; i++) {
      if (userName.slice(i, i + 2).length === 2) {
        const cutName = userName.slice(i, i + 2);
        cutUserNameArr.push(cutName);
      }
    }
  });

  return cutUserNameArr;
}

function findDuplicateUserWord(cutUserNameArr) {
  const duplicateUserWord = [];

  while (cutUserNameArr.length > 0) {
    let userName = cutUserNameArr.pop();
    if (cutUserNameArr.includes(userName)) {
      duplicateUserWord.push(userName);
    }
  }

  return [...new Set(duplicateUserWord)];
}

function findDuplicateUser(duplicateUserWordArr, forms) {
  const duplicatedUser = [];

  for (let user of forms) {
    let username = user[1];
    duplicateUserWordArr.map((word) => {
      username.includes(word) ? duplicatedUser.push(user) : "";
    });
  }
  return [...new Set(duplicatedUser)];
}

function isEmailValid(forms) {
  const emailArr = getEmail(forms);
  const isDomainArr = [];
  const emailLength = [];
  let isEmailLength = false;

  for (let email of emailArr) {
    const regex = /([a-zA-Z0-9+-\_.]+@+email.com)+/g;
    isDomainArr.push(regex.test(email));
    emailLength.push(email.length);
  }

  //email 형식 에러처리
  if (!isDomainArr.every((item) => item === true)) {
    throw "이메일 형식에 맞춰 email.com 도메인을 사용해주세요";
  }

  emailLength.map((item) => {
    if (item < 11 || item >= 20) {
      isEmailLength = true;
    }
  });

  if (isEmailLength) {
    throw " 11자 이상 20자 미만으로 작성해주세요";
  }
}

function getEmail(userArr) {
  emailArr = [];
  userArr.map((user) => emailArr.push(user[0]));
  return [...new Set(emailArr)];
}

function isNickNameValid(forms) {
  const nickNameArr = getUserName(forms);
  const nickNameLength = [];
  const isNickNameArr = [];
  let isNickName = false;

  const regex = /^[ㄱ-ㅎ|가-힣]+$/;
  for (let nickName of nickNameArr) {
    isNickNameArr.push(regex.test(nickName));
    nickNameLength.push(nickName.length);
  }

  if (!isNickNameArr.every((item) => item === true)) {
    throw "닉네임은 한글만 입력해주세요";
  }

  nickNameLength.map((item) => {
    if (item < 1 || item >= 20) {
      isNickName = true;
    }
  });

  if (isNickName) {
    throw " 닉네임은 11자 이상 20자 미만으로 작성해주세요";
  }
}

function problem6(forms) {
  isEmailValid(forms) && isNickNameValid(forms);

  const userNameArr = getUserName(forms);
  const cutUserNameArr = cutUserName(userNameArr);
  const duplicateUserWordArr = findDuplicateUserWord(cutUserNameArr);
  const duplicateUserArr = findDuplicateUser(duplicateUserWordArr, forms);
  const answer = getEmail(duplicateUserArr);

  answer.sort();
  return answer;
}

module.exports = problem6;
