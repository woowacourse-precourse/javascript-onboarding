function problem4(word) {
  var answer = "";
  let reverse, abstemp, ascii = 0;
  for (var i = 0; i<word.length; i++) {
    if(word[i] === word[i].toUpperCase()){
      ascii = 65;
    }
    else if (word[i]=== word[i].toLowerCase()){
      ascii = 97;
    }
    abstemp = Math.abs(ascii - word.charCodeAt(i));
    reverse = (ascii + 25) - abstemp;
    answer = answer + String.fromCharCode(reverse);
  }
  return answer;
}


module.exports = problem4;
