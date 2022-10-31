const problem6 = (forms) => {
  let answer = [];
  let namePieces = [];

  const nameList = forms.map((form) => form[1].split(""));

  // prettier-ignore
  nameList.forEach((name) =>
    (namePieces = [...namePieces, name.map((_, i) => {
      if (i !== name.length - 1) return name[i] + name[i + 1];
    }).filter((namePiece) =>
      namePiece)])
  );

  return answer;
};

module.exports = problem6;
