function problem4(word) {
  var answer = [];
  var ascii = 0;
  var tempForTrans = 0;
  
  for (var i=0; i<word.length; i++) {
    ascii = word.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      tempForTrans = 155 - ascii;
    }
    else if (ascii >= 97 && ascii <= 122) {
      tempForTrans = 219 - ascii;
    }
    else {
      tempForTrans = ascii;
    }

    answer.push(String.fromCharCode(tempForTrans));
  }

  return answer.join("");
}

module.exports = problem4;