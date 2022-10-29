function problem4(word) {
  if(!checkInputValid(word)) {
    return 'error';
  }

  const result = word.split('').map((v) => {
    if (upperCaseTest(v)) {
      return String.fromCharCode(90 - (v.charCodeAt(0) - 65))
    }
    if (lowerCaseTest(v)) {
      return String.fromCharCode(122 - (v.charCodeAt(0) - 97))
    }
    return v
  })

  return result.join('')
}

function lowerCaseTest(value) {
  const lowerCaseRegExp = /^[a-z]+$/;
  if (lowerCaseRegExp.test(value)) {
    return true
  }
  return false;
}

function upperCaseTest(value) {
  const upperCaseRegEx = /^[A-Z]+$/;
  if (upperCaseRegEx.test(value)) {
    return true
  }
  return false;
}

function checkInputValid(word) {
  if (word.length < 1 || word.length > 1000) return false;
  return true;
}

module.exports = problem4;

