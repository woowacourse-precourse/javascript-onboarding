function problem3(number) {
  if (!inputValidCheck(number)) {
    return 'error'
  }
  // return 'checkValid Success'
}

function inputValidCheck(number) {
  if(number < 1 || number > 1000) return false;
  if(!Number.isInteger(number)) return false;
  return true
}

module.exports = problem3;
