function problem6(forms) {
  const duplicateEmail = getDuplicateEmail(forms);

  return duplicateEmail;
}

function getConsecutiveLetters(nickname) {
  const consecutiveLetters = [];

  for (let i = 0; i < nickname.length - 1; i++) {
    consecutiveLetters.push(nickname.substr(i, 2));
  }

  return consecutiveLetters;
}

function getDuplicateEmail(forms) {
  const allConsecutiveLetters = {};
  const duplicateEmail = new Set();

  forms.forEach((user) => {
    const [email, nickname] = user;
    const userConsecutiveLetters = getConsecutiveLetters(nickname);

    userConsecutiveLetters.forEach((letter) => {
      if (letter in allConsecutiveLetters) {
        duplicateEmail.add(allConsecutiveLetters[letter]);
        duplicateEmail.add(email);
      } else if (!(letter in allConsecutiveLetters)) {
        allConsecutiveLetters[letter] = email;
      }
    });
  });

  return Array.from(duplicateEmail).sort();
}

module.exports = problem6;
