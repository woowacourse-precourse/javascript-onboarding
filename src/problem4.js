function change(alphabet) {
  var code = alphabet.charCodeAt(0);
  
  if (65 <= code && code <= 90) {
    return String.fromCharCode(155 - code);
  } else if (97 <= code && code <= 122) {
    return String.fromCharCode(219 - code);
  } else {
    return String.fromCharCode(code);
  }
}

function problem4(word) {
  var answer = [];
  var arr = [...word]
  
  for (let i = 0; i < arr.length; i++) {
    answer.push(change(arr[i]));
  }

  return answer.join("");
}

module.exports = problem4;
