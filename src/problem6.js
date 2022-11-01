
const sliceName = (compareName, index) => {
  const slicedNameSet = new Set();

  for (let i = 0; i < compareName.length - 1; i++) {
    slicedNameSet.add(compareName.slice(i, i + 2));
  }

  return [...slicedNameSet];
};

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

const isValidEmailFormat = (email) => {
  const emailRegExp = /[A-Za-z]{1,10}@email\.com$/;

  return emailRegExp.test(email);
};

const isValidNameFormat = (name) => {
  const nameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/;

  return nameRegExp.test(name);
};

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

const getInvalidCrewEmail = (forms) => {
  const validForms = getValidForms(forms);

  let inValidUsers = [];

  validForms.forEach(([email, name], index) => {
    if (isRepeatName(name, validForms, index)) {
      inValidUsers.push(email);
    }
  });

};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
