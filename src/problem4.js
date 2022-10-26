function problem4(words) {
  const getOppositeAlphabet = (character) => {
    if (!isUpperCase(character) && !isLowerCase(character)) {
      return character;
    }

    const asciiCharacter = character.char.CodeAt(0);

    if (isUpperCase(character)) {
      return String.fromCharCode(155 - asciiCharacter);
    }

    if (isLowerCase(character)) {
      return String.fromCharCode(219 - asciiCharacter);
    }
  };

  const isUpperCase = (character) => {
    return asciiCharacter >= 65 && asciiCharacter <= 90;
  };

  const isLowerCase = (character) => {
    return asciiCharacter >= 97 && asciiCharacter <= 122;
  };

  if (typeof words !== 'string' || words.length < 1 || words.length > 1000) {
    throw new Error(
      '입력은 문자열이어야 하며, 문자열의 크기는 1이상 1000이하여야 합니다.'
    );
  }

  return [...words].map(getOppositeAlphabet).join('');
}

module.exports = problem4;
