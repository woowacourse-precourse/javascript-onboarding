function problem2(cryptogram) {

  return removeDeplitcation(cryptogram)
}

function removeDeplitcation(str) {
  let s = ''
  for (let char of str) {
    if (char !== s[s.length-1]) {
      s += char
    } else {
      s = s.slice(0, s.length-1)
    }
  }

  return s
}

module.exports = problem2;
