/**
 * 짝수인지 홀수인지 판단한다.
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 === 0
}

/**
 * page 입력 범위가 올바른지 확인한다.
 * @param {number} page
 * @param {number=} min
 * @param {number=} max
 * @returns {boolean}
 */
function isOutOfRange(page, min = 1, max = 400) {
  return page < min || page > max
}

/**
 * 올바른 입력인지 확인한다.
 * @param {number[]} pages1
 * @param {number[]} pages2
 * @returns {boolean}
 */
function isInvalidInputs(pages1, pages2) {
  if (!pages1 || !pages2) {
    return true
  }

  if (!Array.isArray(pages1) || !Array.isArray(pages2)) {
    return true
  }

  if (pages1.length !== 2 || pages2.length !== 2) {
    return true
  }

  if (pages1[0] + 1 !== pages1[1] || pages2[0] + 1 !== pages2[1]) {
    return true
  }

  if (isEven(pages1[0]) || isEven(pages2[0])) {
    return true
  }

  const outOfRange = pages1.concat(pages2).some((page) => isOutOfRange(page))
  if (outOfRange) {
    return true
  }

  return false
}

/**
 * 점수를 반환한다.
 * @param {number[]} pages
 * @returns {number}
 */
function getScore(pages) {
  const pagesAsStrings = pages.map((page) => Array.from(page.toString()))
  const possibleScores = []

  pagesAsStrings.forEach((page) => {
    const multiplication = page.reduce(
      (accumulation, currentPage) => accumulation * parseInt(currentPage),
      1
    )

    possibleScores.push(multiplication)
  })

  pagesAsStrings.forEach((page) => {
    const sumation = page.reduce(
      (accumulation, currentPage) => accumulation + parseInt(currentPage),
      0
    )

    possibleScores.push(sumation)
  })

  return Math.max(...possibleScores)
}

/**
 * 게임의 결과를 반환한다.
 * 0이면 비긴 것이다.
 * 1이면 첫 번째 사람이 이긴다.
 * 2이면 두 번째 사람이 이긴다.
 * 올바른 입력이 아닐 경우 -1을 반환한다.
 * @param {number[]} pages1
 * @param {number[]} pages2
 * @returns {number}
 */
function problem1(pages1, pages2) {
  if (isInvalidInputs(pages1, pages2)) {
    return -1
  }

  const score1 = getScore(pages1)
  const score2 = getScore(pages2)

  if (score1 > score2) {
    return 1
  } else if (score1 < score2) {
    return 2
  } else {
    return 0
  }
}

module.exports = problem1
