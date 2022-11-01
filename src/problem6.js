function isKoreanOnly(word) {
  for (let i = 0; i < word.length; ++i) {
    if (
      word.charCodeAt(i) < '가'.charCodeAt(0) ||
      word.charCodeAt(i) > '힣'.charCodeAt(0)
    )
      return false;
  }
  return true;
}

function isException(forms) {
  if (!Array.isArray(forms) || forms.length > 10000 || forms.length < 1)
    return true;
  for (let i = 0; i < forms.length; ++i)
    if (
      forms[i].length !== 2 ||
      forms[i][0].length > 19 ||
      forms[i][0].length < 11 ||
      forms[i][0].split('@')[1] !== 'email.com' ||
      forms[i][1].length > 19 ||
      forms[i][1].length < 1 ||
      !isKoreanOnly(forms[i][1])
    )
      return true;
  return false;
}

function splitName(name) {
  const wordList = [];

  for (let i = 0; i + 1 < name.length; ++i) {
    wordList.push(name.substring(i, i + 2));
  }
  return [...new Set(wordList)];
}

function checkDuplicate(form, map, duplicated) {
  splitName(form[1]).forEach((word) => {
    if (map.has(word)) {
      duplicated.push(form[0]);
      duplicated.push(map.get(word));
    } else map.set(word, form[0]);
  });
}

function problem6(forms) {
  if (isException(forms)) return 'isException';
  const map = new Map();
  const duplicated = [];

  forms.forEach((form) => checkDuplicate(form, map, duplicated));
  return [...new Set(duplicated)].sort();
}

module.exports = problem6;
