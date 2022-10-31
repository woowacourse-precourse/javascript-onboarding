var capitalSum = 'A'.charCodeAt(0) + 'Z'.charCodeAt(0);
var smallSum = 'a'.charCodeAt(0) + 'z'.charCodeAt(0);

function changeCapital(capital){
  return String.fromCharCode(capitalSum-capital.charCodeAt(0));
}

function changeSmall(small){
  return String.fromCharCode(smallSum-small.charCodeAt(0));
}


function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
