function problem6(forms) {
  const duplicated = [];

  forms.forEach((target, targetIndex) => {
    const [targetEmail, targetNickName] = target;
    for (let i = targetIndex + 1; i < forms.length; i++) {
      for (let j = 0; j < targetNickName.length - 1; j++) {
        if (forms[i][1].includes(targetNickName.slice(j, j + 2))) {
          duplicated.push(targetEmail, forms[i][0]);
          break;
        }
      }
    }
  });

  const result = [...new Set(duplicated)].sort();
  return result;
}

module.exports = problem6;
