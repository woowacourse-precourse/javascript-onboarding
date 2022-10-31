const isDuplicated = (nick1, nick2) => {
  let result = false;
  for (let i = 0; i < nick1.length - 1; i++) {
    for (let j = 0; j < nick2.length - 1; j++) {
      if (nick1[i] === nick2[j] && nick1[i + 1] === nick2[j + 1]) return true;
    }
  }
  return result;
};

const problem6 = (forms) => {
  const duplicated = new Set();

  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      if (isDuplicated(forms[i][1], forms[j][1])) {
        duplicated.add(forms[i][0]);
        duplicated.add(forms[j][0]);
        break;
      }
    }
  }

  return [...duplicated].sort();
};

module.exports = problem6;
