function problem2(cryptogram) {
  var answer;
  answer = removeRepetition(cryptogram);
  return answer;
}

module.exports = problem2;

function removeRepetition(string) {
// return string after removing repetition
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] && string[i] !== string[i - 1]) {
      result += string[i];
    }
  }

  // check if result has repetition
  if (checkRepetition(result)) {
    removeRepetition(result); // recursion
  } else {
    finalResult = result;
  }
  return finalResult;
}

// check for repetition in string
function checkRepetition(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return true;
    }
  }
  return false;
}