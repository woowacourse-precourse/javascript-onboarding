function problem4(word) {
  if(!checkInputValid(word)) {
    return 'error';
  }

  //return true
}

function checkInputValid(word) {
  if (word.length < 1 || word.length > 1000) return false;
  return true;
}

module.exports = problem4;
