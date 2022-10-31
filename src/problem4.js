function problem4(words) {
  return words.split('').map(word => convertWord(word)).join('');
}

function convertWord(word){
  if(betweenUpper(word)){
    const convertWord = 90 - (word.charCodeAt(0) - 65);
    return  String.fromCharCode(convertWord);
  } else if (betweenLower(word)){
    const convertWord = 122 - (word.charCodeAt(0) - 97);
    return  String.fromCharCode(convertWord);
  }

  return word
}

function betweenLower(word){
  return word >= 'a' && word <= 'z';
}

function betweenUpper(word){
  return word >= 'A' && word <= 'Z';
}
module.exports = problem4;
