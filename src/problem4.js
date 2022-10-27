function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

function stringTransform(element){
  const UPPERCASE_MIN=65;
  const UPPERCASE_MAX=90;
  const LOWERCASE_MIN=97;
  const LOWERCASE_MAX=122;
  let transform=element.charCodeAt();

  if(transform>=UPPERCASE_MIN && transform<=UPPERCASE_MAX){
    transform=(UPPERCASE_MAX+UPPERCASE_MIN)-transform;
  }
  if(transform>=LOWERCASE_MIN && transform<=LOWERCASE_MAX){
    transform=(LOWERCASE_MAX+LOWERCASE_MIN)-transform;
  }
  return String.fromCharCode(transform);
}

function answerString(word){
  let newWord='';
  for(let i=0; i<word.length; i++){
    newWord+=stringTransform(word[i]);
  }
  return newWord;
}

function error(word){
  if(word.length<1 || word.length>1000){
    return false;
  }
  return true;
}