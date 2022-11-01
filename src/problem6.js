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

const isValidNameFormat = (name) => {
  const nameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/;

  return nameRegExp.test(name);
};


function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
