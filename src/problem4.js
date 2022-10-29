function problem4(word) {
  let arrWord = word.split("").map(splitWord => reverseWord(splitWord.charCodeAt())).join("");
  return arrWord;
}

function reverseWord(ascii){
  if(ascii >=65 && ascii<=90){
    return String.fromCharCode(90 - (ascii-65));
  }
  if(ascii >=97 && ascii<=122){
    return String.fromCharCode(122 - (ascii-97));
  }
  else{
    return String.fromCharCode(ascii);
  }
}

module.exports = problem4;