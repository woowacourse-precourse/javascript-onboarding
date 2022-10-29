function problem2(cryptogram) {
  if (errorHandler(cryptogram)) {
    console.log("Error : 글자수 제한");
    return null;
  }
  
  var answer;
  return answer;
}

function errorHandler(cryptogram) {
  if (cryptogram.length > 1000) return true;
}

module.exports = problem2;
