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
 * 각각의 단어들을 wordLength로 자른 단어들의 set으로 변환한다.
 * @param {string[]} words
 * @param {number=} wordLength
 * @returns {Set<string>}
 */
function getUniquesInWords(word, wordLength = 2) {
  const splittedWords = new Set()

  for (
    let startIndex = 0;
    startIndex < word.length - wordLength + 1;
    startIndex++
  ) {
    const newWord = word.slice(startIndex, startIndex + wordLength)

    splittedWords.add(newWord)
  }

  return splittedWords
}

/**
 * @param {*} key
 * @param {object} object
 * @returns {boolean}
 */
function hasKey(key, object) {
  return key in object
}

/**
 * 각 단어들이 총 몇 개씩 있는지 파악한다.
 * @param {string[]} splittedWords
 * @returns {Object.<string, number[]>}
 */
function getCountInWords(splittedWords) {
  const indexesContainingWords = {}

  splittedWords.forEach((words, index) => {
    words.forEach((word) => {
      if (!hasKey(word, indexesContainingWords)) {
        indexesContainingWords[word] = []
      }

      indexesContainingWords[word].push(index)
    })
  })

  return indexesContainingWords
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

  const uniqueWords = forms
    .map((form) => getUniquesInWords(form[1]))
    .map((words) => [...words])
  const indexesContainingWords = getCountInWords(uniqueWords)
  const contained = Array(forms.length).fill(false) // 중복을 제거하기 위해
  const changeNeededEmails = []

  for (const indexes of Object.values(indexesContainingWords)) {
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
