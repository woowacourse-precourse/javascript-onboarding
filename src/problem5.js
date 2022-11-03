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

  if (number < 1 || number > 1000000) {
    return true
  }

  return false
}

/**
 * 은행에서 출금할 화폐를 반환한다.
 * @param {number} money
 * @returns {number[] | string}
 */
function problem5(money) {
  if (isInvalidInputs(money)) {
    return '입력값이 잘못되었습니다.'
  }

  let currencyCount
  let changes = money
  const currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  const currencyCounts = []

  currencies.forEach((currency) => {
    currencyCount = Math.floor(changes / currency)
    changes %= currency

    currencyCounts.push(currencyCount)
  })

  return currencyCounts
}

module.exports = problem5
