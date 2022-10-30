function problem4(word) {
  const uppercases = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const lowercases = uppercases.map((letter) => letter.toLowerCase());
  let result = '';

  word.split('').forEach((letter) => {
    const indexOfUppercase = uppercases.indexOf(letter);
    const indexOfLowercase = lowercases.indexOf(letter);
    const length = uppercases.length - 1;

    if (indexOfUppercase !== -1) result += uppercases[length - indexOfUppercase];
    else if (indexOfLowercase !== -1) result += lowercases[length - indexOfLowercase];
    else result += letter;
  });

  return result;
}

module.exports = problem4;
