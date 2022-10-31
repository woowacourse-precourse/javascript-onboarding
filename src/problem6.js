function problem6(forms) {
  const result = [];
  const checkOverlapObj = {};

  forms.map((form) => {
    const [_, crewName] = form;
    crewName
      .split("")
      .map((_, index) => {
        if (crewName.length - 1 === index) return;
        const tempWord = crewName.substring(index, index + 2);
        if (tempWord in checkOverlapObj) checkOverlapObj[tempWord]++;
        else checkOverlapObj[tempWord] = 1;
        return;
      });
  });

  forms.map((form) => {
    const [email, crewName] = form;
    crewName
      .split("")
      .map((_, index) => {
        if (crewName.length - 1 === index) return;
        const tempWord = crewName.substring(index, index + 2);
        if (checkOverlapObj[tempWord] > 1) result.push(email);
        return;
      });
  });

  return result
    .filter((el, index) => {
      return result.indexOf(el) === index;
    })
    .sort();
}

module.exports = problem6;
