function problem6(forms) {
  const namePieceObj = {};
  const formObj = {};

  for (const [email, nickname] of forms) {
    formObj[nickname] = email;

    for (let i = 0; i < nickname.length - 1; i++) {
      const namePiece = nickname.slice(i, i + 2);

      namePieceObj[namePiece] = (namePieceObj[namePiece] || new Set()).add(
        nickname
      );
    }
  }

  const emailsToNotice = Object.values(namePieceObj)
    .reduce(
      (names, nameSet) => (nameSet.size >= 2 ? [...names, ...nameSet] : names),
      []
    )
    .map((nickname) => formObj[nickname])
    .sort((a, b) => a.localeCompare(b));

  return [...new Set(emailsToNotice)];
}

module.exports = problem6;
