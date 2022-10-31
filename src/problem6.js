function getNicknamePiecesCounts(forms) {
  const nicknamePiecesCounts = {};

  forms.forEach((form) => {
    const nickname = form[1];
    const nicknamePieces = new Set();

    for (let i = 0; i < nickname.length - 1; i++) {
      const nicknamePiece = nickname.slice(i, i + 2);
      nicknamePieces.add(nicknamePiece);
    }

    nicknamePieces.forEach((nicknamePiece) => {
      if (!nicknamePiecesCounts.hasOwnProperty(nicknamePiece)) {
        nicknamePiecesCounts[nicknamePiece] = 1;
      } else {
        nicknamePiecesCounts[nicknamePiece] += 1;
      }
    });
  });

  return nicknamePiecesCounts;
}

function getDuplicatedCrewEmails(forms, nicknamePiecesCounts) {
  const duplicatedCrewEmails = new Set();

  forms.forEach((form) => {
    const [email, nickname] = form;
    let isDuplicated = false;

    for (let i = 0; i < nickname.length - 1; i++) {
      const nicknamePiece = nickname.slice(i, i + 2);

      if (nicknamePiecesCounts[nicknamePiece] >= 2) {
        isDuplicated = true;
        break;
      }
    }

    if (isDuplicated) {
      duplicatedCrewEmails.add(email);
    }
  });

  return [...duplicatedCrewEmails];
}

function problem6(forms) {
  const nicknamePiecesCounts = getNicknamePiecesCounts(forms);
  const duplicatedCrewEmails = getDuplicatedCrewEmails(
    forms,
    nicknamePiecesCounts
  );

  const answer = duplicatedCrewEmails.sort();

  return answer;
}

module.exports = problem6;
