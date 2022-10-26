function problem2(cryptogram) {
  if (cryptogram.length === 1) return cryptogram

  while (1) {
    const duplicatedSection = []
    let left = 0,
      right = 0

    while (left <= cryptogram.length && right <= cryptogram.length) {
      if (left === right) right++
      else if (cryptogram[left] !== cryptogram[right]) left = right
      else if (cryptogram[left] === cryptogram[right]) {
        duplicatedSection.push(left)
        duplicatedSection.push(right)
        right += 1
        left = right
      }
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
