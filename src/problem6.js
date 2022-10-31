function problem6(forms) {
  const duplicateWords = getDuplicateWords(forms);

  return forms
    .filter(([_, nickName]) =>
      duplicateWords.some((duplicateWord) => nickName.includes(duplicateWord))
    )
    .map(([email, _]) => email)
    .sort();
}

const getAllCase = (map, nickName) => {
  for (let i = 0; i < nickName.length - 1; i++) {
    const key = nickName.slice(i, i + 2);
    if (map.get(key)) map.set(key, map.get(key) + 1);
    else map.set(key, 1);
  }
};

const getDuplicateWords = (forms) => {
  const candinates = new Map();
  forms.forEach(([_, nickName]) => getAllCase(candinates, nickName));

  return Array.from(candinates)
    .filter(([_, count]) => count > 1)
    .map(([word, _]) => word);
};

module.exports = problem6;
