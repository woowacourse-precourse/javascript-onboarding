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

  return answer;
}

module.exports = problem4;
