/**
 * 올바른 입력인지 확인한다.
 * @param {string[][]} forms
 * @returns {boolean}
 */
function isInvalidInputs(forms) {
  if (!forms) {
    return true
  }

  if (!Array.isArray(forms)) {
    return true
  }

  if (forms.length < 1 || forms.length > 10001) {
    return true
  }

  const isRightFormat = forms.every(
    (form) =>
      Array.isArray(form) &&
      form.length === 2 &&
      /^.{1,9}\@email\.com$/.test(form[0]) &&
      /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19}$/.test(form[1])
  )
  if (!isRightFormat) {
    return true
  }

  return false
}

/**
 * 각각의 단어들을 wordLength로 자른 새로운 단어로 만든다.
 * 그렇게 생긴 새로운 단어를 포함한 단어들의 index를 반환한다.
 * @param {string[]} words
 * @param {number=} wordLength
 * @returns {object}
 */
function getCountInWords(words, wordLength = 2) {
  const countInWords = {}

  words.forEach((word, index) => {
    for (
      let startIndex = 0;
      startIndex < word.length - wordLength + 1;
      startIndex++
    ) {
      const newWord = word.slice(startIndex, startIndex + wordLength)

      newWord in countInWords
        ? countInWords[newWord].push(index)
        : (countInWords[newWord] = [index])
    }
  })

  return countInWords
}

/**
 * 비슷한 닉네임을 가진 이메일들을 반환한다.
 * @param {string[][]} forms
 * @returns {string[]}
 */
function problem6(forms) {
  if (isInvalidInputs(forms)) {
    return '입력값이 잘못되었습니다.'
  }

  const countInWords = getCountInWords(forms.map((form) => form[1])) // 2글자만 겹쳤는지 확인하면 됨
  const contained = Array.from({ length: forms.length }, () => false) // 중복을 제거하기 위해
  const changeNeededEmails = []

  for (const indexes of Object.values(countInWords)) {
    if (indexes.length < 2) {
      continue
    }

    indexes.forEach((index) => {
      if (!contained[index]) {
        contained[index] = true
        changeNeededEmails.push(forms[index][0])
      }
    })
  }

  return changeNeededEmails.sort()
}

module.exports = problem6
