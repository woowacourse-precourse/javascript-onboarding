function problem4(words) {
  const getOppositeAlphabet = (character) => {
    if (!isUpperCase(character) && !isLowerCase(character)) {
      return character;
    }

    if (isUpperCase(character)) {
      return String.fromCharCode(155 - character.charCodeAt(0));
    }

    if (isLowerCase(character)) {
      return String.fromCharCode(219 - character.charCodeAt(0));
    }
  };

  const isUpperCase = (character) => {
    return character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90;
  };

  const isLowerCase = (character) => {
    return character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122;
  };

  if (typeof words !== 'string' || words.length < 1 || words.length > 1000) {
    throw new Error(
      '입력은 문자열이어야 하며, 문자열의 크기는 1이상 1000이하여야 합니다.'
    );
  }

  return [...words].map(getOppositeAlphabet).join('');
}

module.exports = problem4;
