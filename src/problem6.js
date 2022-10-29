function problem6(forms) {
  let duplicateObj = {};

  forms.forEach((form) => {
    let twoLettersArr = setTwoLetters(form[1]);

    twoLettersArr.forEach((element) =>
      element in duplicateObj
        ? duplicateObj[element].push(form[0])
        : (duplicateObj[element] = [form[0]])
    );
  });

  return getDuplicateEmails(duplicateObj);
}

function setTwoLetters(nickname) {
  let twoLettersArr = nickname.split('').reduce((acc, cur, idx) => {
    if (idx !== nickname.length - 1) {
      acc.push(cur + nickname[idx + 1]);
    }
    return acc;
  }, []);

  return [...new Set(twoLettersArr)];
}

function getDuplicateEmails(obj) {
  let duplicateEmails = [];
  
  for (const value of Object.values(obj)) {
    if (value.length > 1) duplicateEmails.push(...value);
  }

  return [...new Set(duplicateEmails)].sort();
}

module.exports = problem6;
