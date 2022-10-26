function problem2(cryptogram) {
  while (1) {
    let left = 0,
      right = 0,
      duplicatedSection = []

    while (left <= cryptogram.length && right <= cryptogram.length) {
      if (left === right) right++
      else if (cryptogram[left] !== cryptogram[right]) left = right
      else if (cryptogram[left] === cryptogram[right]) {
        for (let i = left; i <= right; i++) duplicatedSection.push(i)
        right += 1
        left = right
      }
      console.log(duplicatedSection)
    }

    if (duplicatedSection.length === 0) return cryptogram

    let tempCryptogram = ""

    for (let i = 0; i < cryptogram.length; i++) {
      if (!duplicatedSection.includes(i)) tempCryptogram += cryptogram[i]
    }

    cryptogram = tempCryptogram
  }
  return cryptogram
}

module.exports = problem2
