function problem6(forms) {
  let repetitionCheck = new Map();
  let duplicateUserEmail = [];
  for (let user of forms) {
    let nickname = user[1];
    for (let j = 0; j < nickname.length - 1; j++) {
      let duplicateNickname = nickname.slice(j, j + 2);
      if (repetitionCheck.has(duplicateNickname)) {
        if (
          !duplicateUserEmail.includes(repetitionCheck.get(duplicateNickname))
        )
          duplicateUserEmail.push(repetitionCheck.get(duplicateNickname));
        duplicateUserEmail.push(user[0]);
      } else repetitionCheck.set(duplicateNickname, user[0]);
    }
  }
  for (let i = 0; i < duplicateUserEmail.length; i++) {
    let lowCharacterIndex = i;

    for (let j = i + 1; j < duplicateUserEmail.length; j++) {
      if (
        duplicateUserEmail[lowCharacterIndex].split("@")[0] >
        duplicateUserEmail[j].split("@")[0]
      )
        lowCharacterIndex = j;
    }
    [duplicateUserEmail[i], duplicateUserEmail[lowCharacterIndex]] = [
      duplicateUserEmail[lowCharacterIndex],
      duplicateUserEmail[i],
    ];
  }
  return duplicateUserEmail;
}

module.exports = problem6;
