function problem4(word) {
  var answer = [];
  var ascii = "";
  for (var i=0; i<word.length; i++){
      var tmp = word.charCodeAt(i);
      if (tmp > 96 && tmp < 123){
          ascii = Math.abs(122 - (tmp - 97));
          answer.push(String.fromCharCode(ascii));
      }else if (tmp > 64 && tmp < 91){
          ascii = Math.abs(90 - (tmp - 65));
          answer.push(String.fromCharCode(ascii));
      }else{
          answer.push(" ");
      }
  }
  answer = answer.join('');
  return answer;
}

module.exports = problem4;
