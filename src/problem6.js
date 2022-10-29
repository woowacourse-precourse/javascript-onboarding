function problem6(forms) {
  let duplicateCount = new Map();

  forms.forEach((crew) => {
    for (let i = 0; i < crew[1].length - 1; i++) {
      let duplicate = crew[1].slice(i, i + 2);
      if (duplicateCount.has(duplicate))
        duplicateCount.set(duplicate, duplicateCount.get(duplicate) + 1);
      else duplicateCount.set(duplicate, 1);
    }
  });
  let duplicateStrArr = [];
  duplicateCount.forEach((value, key) => {
    if (value > 1) duplicateStrArr.push(key);
  });

  let emails = [];

  forms.forEach((crew) => {
    duplicateStrArr.forEach((y) => {
      if (crew[1].includes(y)) emails.push(crew[0]);
    });
  });
  return emails.sort();
}

module.exports = problem6;
