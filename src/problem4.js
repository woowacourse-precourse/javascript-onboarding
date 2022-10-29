function problem4(word) {
  if(!checkInputValid(word)) {
    return 'error';
  }

  // lowerCaseTest(word) 
  // upperCaseTest(word)
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
