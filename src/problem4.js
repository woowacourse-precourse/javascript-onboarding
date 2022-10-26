function problem4(words) {
  const getOppositeAlphabet = (character) => {
    const characterAscii = character.charCodeAt(0);

    if (!isUpperCase(characterAscii) && !isLowerCase(characterAscii)) {
      return character;
    }

    if (isUpperCase(characterAscii)) {
      return String.fromCharCode(155 - characterAscii);
    }

    if (isLowerCase(characterAscii)) {
      return String.fromCharCode(219 - characterAscii);
    }
  };

  const isUpperCase = (characterAscii) => {
    return characterAscii >= 65 && characterAscii <= 90;
  };

  const isLowerCase = (characterAscii) => {
    return characterAscii >= 97 && characterAscii <= 122;
  };

  if (typeof words !== 'string' || words.length < 1 || words.length > 1000) {
    throw new Error(
      '입력은 문자열이어야 하며, 문자열의 크기는 1이상 1000이하여야 합니다.'
    );
  }

  return [...words].map(getOppositeAlphabet).join('');
}

module.exports = problem4;
