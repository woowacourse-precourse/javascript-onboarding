function problem4(word) {
  let answer = "";
  const UPPER = {
    sum: 155,
    A: 65,
    Z: 90,
  }

  const LOWER = {
    sum: 219,
    a: 96,
    z: 122,
  }

  function getAsciiCode(word, index) {
    return word.charCodeAt(index);
  }

  function getReverseCharByLetterCase(ascii) {
    if (UPPER.A <= ascii && ascii <= UPPER.Z) {
      return String.fromCharCode(UPPER.sum - ascii);
    }

    if (LOWER.a <= ascii && ascii <= LOWER.z) {
      return String.fromCharCode(LOWER.sum - ascii);
    }

    return String.fromCharCode(ascii)
  }

  for (let i = 0; i < word.length; i++) {
    const ascii = getAsciiCode(word, i);
    answer += getReverseCharByLetterCase(ascii);
  }

  return answer;
}

module.exports = problem4;
