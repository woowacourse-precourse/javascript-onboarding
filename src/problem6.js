const sliceNickname = (start, nickname) => nickname.slice(start, start + 2);

const connectNameToEmail = (forms) => {
  const resultObj = {};

  for (const [email, nickname] of forms) {
    resultObj[nickname] = email;
  }
  return resultObj;
};

const getNamePieces = (forms) => {
  const namePieces = {};

  for (const [_, nickname] of forms) {
    for (let i = 0; i < nickname.length - 1; i++) {
      const namePiece = sliceNickname(i, nickname);

      namePieces[namePiece] = (namePieces[namePiece] || new Set()).add(
        nickname
      );
    }
  }
  return namePieces;
};

const getEmailsToNotice = (nicknamePieces, nameToEmail) =>
  Object.values(nicknamePieces)
    .reduce(
      (names, nameSet) => (nameSet.size >= 2 ? [...names, ...nameSet] : names),
      []
    )
    .map((nickname) => nameToEmail[nickname])
    .sort((a, b) => a.localeCompare(b));

function problem6(forms) {
  const nameToEmail = connectNameToEmail(forms);
  const nicknamePieces = getNamePieces(forms);
  const emailsToNotice = getEmailsToNotice(nicknamePieces, nameToEmail);
  return [...new Set(emailsToNotice)];
}

module.exports = problem6;
