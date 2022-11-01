function getPartsOfNickname(nickname) {
  const parts = [...nickname]
    .reduce((acc, _, idx) => [...acc, nickname.substr(idx, 2)], [])
    .slice(0, -1);

  return parts;
}

function getDuplication(forms) {
  return forms.reduce((duplicates, form) => {
    const [email, nickname] = form;

    getPartsOfNickname(nickname).forEach((part) => {
      duplicates[part] = [...(duplicates[part] || []), email];
    });

    return duplicates;
  }, {});
}

function problem6(forms) {
  const duplication = getDuplication(forms);

  const result = Object.values(duplication)
    .filter((duplicate) => duplicate.length > 1)
    .flat()
    .sort();

  return [...new Set(result)];
}

module.exports = problem6;
