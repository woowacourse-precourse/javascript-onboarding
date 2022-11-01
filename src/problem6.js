// 이름 두개씩 자른 것들 모아두기
const sliceName = (compareName, index) => {
  const slicedNameSet = new Set();

  for (let i = 0; i < compareName.length - 1; i++) {
    slicedNameSet.add(compareName.slice(i, i + 2));
  }

  return [...slicedNameSet];
};

// 이름 중복 검사
const isRepeatName = (name, validForms, index) => {
  for (let i = 0; i < validForms.length; i++) {
    if (i === index) continue;
    const compareName = validForms[i][1];

    const slicedName = sliceName(compareName, index);

    for (let word of slicedName) {
      if (name.includes(word)) return true;
    }
  }

  return false;
};

// 이메일 유효성 검사
const isValidEmailFormat = (email) => {
  const emailRegExp = /[A-Za-z]{1,10}@email\.com$/;

  return emailRegExp.test(email);
};

// 닉네임 유효성 검사
const isValidNameFormat = (name) => {
  const nameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/;

  return nameRegExp.test(name);
};

// 이메일과 닉네임이 유효한 사람들
const getValidForms = (forms, slicedNameSet) => {
  const validForms = [];

  forms.forEach(([email, name]) => {
    if (isValidEmailFormat(email) && isValidNameFormat(name)) {
      sliceName(name, slicedNameSet);
      return validForms.push([email, name]);
    }
  });

  return validForms;
};

// 닉네임 변경해야 하는사람들
const getInvalidCrewEmail = (forms) => {
  const validForms = getValidForms(forms);

  let inValidUsers = [];

  validForms.forEach(([email, name], index) => {
    if (isRepeatName(name, validForms, index)) {
      inValidUsers.push(email);
    }
  });

  inValidUsers.sort((email1, email2) => {
    return email1 < email2 ? -1 : email1 > email2 ? 1 : 0;
  });

  const InValidUsersSet = new Set(inValidUsers);

  return [...InValidUsersSet];
};

function problem6(forms) {
  return getInvalidCrewEmail(forms);
}

module.exports = problem6;
