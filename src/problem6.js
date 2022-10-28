function getPartsOfNickname(nickname) {
  const parts = [...nickname]
    .reduce((acc, _, idx) => [...acc, nickname.substr(idx, 2)], [])
    .slice(0, -1);

  return parts;
}

function getDuplicates(forms) {
  return forms.reduce((duplicates, form) => {
    const [email, nickname] = form;

    getPartsOfNickname(nickname).forEach((part) => {
      duplicates[part] = [...(duplicates[part] || []), email];
    });

    return duplicates;
  }, {});
}

function problem6(forms) {
  const duplicates = getDuplicates(forms);

  const result = Object.values(duplicates)
    .filter((duplicate) => duplicate.length > 1)
    .flatMap((results) => results)
    .sort();

  return [...new Set(result)];
}

module.exports = problem6;
