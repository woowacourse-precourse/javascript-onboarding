function problem6(forms) {
  const result = new Set([]);
  forms.forEach(([standardEmail, standardNickname], i) => {
    let isDuplicate = false;
    for (let j = 0; j < standardNickname.length - 1; j++) {
      const standardWord = standardNickname.slice(j, j + 2);
      for (let k = i + 1; k < forms.length; k++) {
        const [compareEmail, compareNickname] = forms[k];
        for (let m = 0; m < compareNickname.length - 1; m++) {
          const compareWord = compareNickname.slice(m, m + 2);
          if (standardWord === compareWord) {
            result.add(compareEmail);
            isDuplicate = true;
          }
        }
      }
    }
    if (isDuplicate) result.add(standardEmail);
  });

  return Array.from(result).sort();
}

module.exports = problem6;
