const asciiMapper = {
  a: getAscii('a'),
  z: getAscii('z'),
  A: getAscii('A'),
  Z: getAscii('Z'),
}

/**
 * 올바른 입력인지 확인한다.
 * @param {string} word
 * @returns {boolean}
 */
function isInvalidInputs(word) {
  if (!word) {
    return true
  }

  if (typeof word !== 'string') {
    return true
  }

  if (word.length < 1 || word.length > 1001) {
    return true
  }

  return false
}

/**
 * 아스키 코드 값을 반환한다.
 * @param {string} character
 * @returns {number}
 */
function getAscii(character) {
  return character.charCodeAt(0)
}

/**
 * 문자를 청개구리의 방법으로 변환한다.
 * @param {string} character
 * @returns {string | undefined}
 */
function translate(character) {
  const ascii = getAscii(character)

  if (asciiMapper.a <= ascii && ascii <= asciiMapper.z) {
    return String.fromCharCode(asciiMapper.z - ascii + asciiMapper.a)
  } else if (asciiMapper.A <= ascii && ascii <= asciiMapper.Z) {
    return String.fromCharCode(asciiMapper.Z - ascii + asciiMapper.A)
  }
}

/**
 * 청개구리의 말을 반환한다.
 * @param {string} word
 * @returns {string}
 */
function problem4(word) {
  if (isInvalidInputs(word)) {
    return '입력값이 잘못되었습니다.'
  }

  let translatedWord = ''

  for (const character of word) {
    if (/[a-zA-Z]/.test(character)) {
      translatedWord += translate(character)
    } else {
      translatedWord += character
    }
  }

  return translatedWord
}

module.exports = problem4
