function isSmallLetter(c){
  if( c >= 'a' && c <= 'z') return true;
  else return false;
}

function isBigLetter(c){
  if( c >= 'A' && c <= 'Z') return true;
  else return false;
}

function problem4(word) {
  var answer = "";
  var z = 'z'.charCodeAt(0);
  var Z = 'Z'.charCodeAt(0);
  for(var i = 0; i < word.length; i++){
    var c = word[i];
    if(isSmallLetter(c)){
      var newLetter = z - c.charCodeAt(0);
      answer += String.fromCharCode('a'.charCodeAt(0) + newLetter);
    }
    else if(isBigLetter(c)){
      var newLetter = Z - c.charCodeAt(0);
      answer += String.fromCharCode('A'.charCodeAt(0) + newLetter);
    }
    else{
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
