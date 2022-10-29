/**
 * 올바른 입력인지 확인한다.
 * @param {string} cryptogram
 * @returns {boolean}
 */
function isInvalidInputs(cryptogram) {
  if (!cryptogram) {
    return true
  }

  if (typeof cryptogram !== 'string') {
    return true
  }

  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return true
  }

  if (/[A-Z]+/g.test(cryptogram)) {
    return true
  }

  return false
}

/**
 * 연속하는 중복 문자들을 삭제한 결과를 반환한다.
 * @param {string} ciphertext
 * @returns {string}
 */
function removeSequentDuplicates(ciphertext) {
  if (ciphertext.length === 0 || ciphertext.length === 1) {
    return [ciphertext, false]
  }

  let newCiphertext = ''
  let left = 0
  let right = 1

  while (left < ciphertext.length) {
    while (
      right < ciphertext.length &&
      ciphertext[left] === ciphertext[right]
    ) {
      right++
    }

    if (left + 1 === right) {
      newCiphertext += ciphertext[left]
      left++
      right++
    } else {
      left = right
      right = left + 1
    }
  }

  return [newCiphertext, newCiphertext.length !== ciphertext.length]
}

/**
 * 암호의 결과를 반환한다.
 * @param {string} cryptogram
 * @returns {string}
 */
function problem2(cryptogram) {
  if (isInvalidInputs(cryptogram)) {
    return '입력값이 잘못되었습니다.'
  }

  let ciphertext = cryptogram
  let removed

  while (true) {
    ;[ciphertext, removed] = removeSequentDuplicates(ciphertext)

    if (!removed) {
      break
    }
  }

  return ciphertext
}

module.exports = problem2
