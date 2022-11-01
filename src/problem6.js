const hasDuplicated = (target, compared) => {
  for (let targetIndex = 0; targetIndex < target.length - 1; targetIndex++) {
    for (
      let comparedIndex = 0;
      comparedIndex < compared.length - 1;
      comparedIndex++
    ) {
      if (
        target[targetIndex] === compared[comparedIndex] &&
        target[targetIndex + 1] === compared[comparedIndex + 1]
      )
        return true;
    }
  }

  return false;
};

const problem6 = (forms) => {
  const duplicated = new Set();

  for (let targetIndex = 0; targetIndex < forms.length - 1; targetIndex++) {
    for (
      let comparedIndex = targetIndex + 1;
      comparedIndex < forms.length;
      comparedIndex++
    ) {
      const [targetEmail, targetNickname] = forms[targetIndex];
      const [comparedEmail, comparedNickname] = forms[comparedIndex];

      if (hasDuplicated(targetNickname, comparedNickname)) {
        duplicated.add(targetEmail).add(comparedEmail);
        break;
      }
    }
  }

  return [...duplicated].sort();
};

module.exports = problem6;
