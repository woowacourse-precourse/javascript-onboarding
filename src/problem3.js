/**
 * 올바른 입력인지 확인한다.
 * @param {number} number
 * @returns {boolean}
 */
function isInvalidInputs(number) {
  if (!number) {
    return true
  }

  if (typeof number !== 'number') {
    return true
  }

  if (number < 1 || number > 10000) {
    return true
  }

  return false
}

/**
 * 369 게임에서 박수치는 횟수를 반환한다.
 * @param {number} number
 * @returns {number | string}
 */
function problem3(number) {
  if (isInvalidInputs(number)) {
    return '입력값이 잘못되었습니다.'
  }

  const numbers = Array.from({ length: number }, (_, index) =>
    (index + 1).toString()
  ).join('')
  const clapCount = numbers.match(/[369]/g)?.length || 0

  return clapCount
}

module.exports = problem3
