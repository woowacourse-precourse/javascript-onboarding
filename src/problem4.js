function problem4(words) {
  const MIN_UPPER_ALPHABET_ASCII = 65;
  const MAX_UPPER_ALPHABET_ASCII = 90;
  const MIN_LOWER_ALPHABET_ASCII = 97;
  const MAX_LOWER_ALPHABET_ASCII = 122;
  const MIN_WORDS_SIZE = 1;
  const MAX_WORDS_SIZE = 1000;

  const getOppositeAlphabet = (character) => {
    const characterAscii = character.charCodeAt(0);

    if (!isUpperCase(characterAscii) && !isLowerCase(characterAscii)) {
      return character;
    }

    if (isUpperCase(characterAscii)) {
      return String.fromCharCode(
        MIN_UPPER_ALPHABET_ASCII + MAX_UPPER_ALPHABET_ASCII - characterAscii
      );
    }

    if (isLowerCase(characterAscii)) {
      return String.fromCharCode(
        MIN_LOWER_ALPHABET_ASCII + MAX_LOWER_ALPHABET_ASCII - characterAscii
      );
    }
  };

  const isUpperCase = (characterAscii) => {
    return characterAscii >= MIN_UPPER_ALPHABET_ASCII && characterAscii <= MAX_UPPER_ALPHABET_ASCII;
  };

  const isLowerCase = (characterAscii) => {
    return characterAscii >= MIN_LOWER_ALPHABET_ASCII && characterAscii <= MAX_LOWER_ALPHABET_ASCII;
  };

  if (typeof words !== 'string' || words.length < MIN_WORDS_SIZE || words.length > MAX_WORDS_SIZE) {
    throw new Error('입력은 문자열이어야 하며, 문자열의 크기는 1이상 1000이하여야 합니다.');
  }

  return [...words].map(getOppositeAlphabet).join('');
}

module.exports = problem4;
