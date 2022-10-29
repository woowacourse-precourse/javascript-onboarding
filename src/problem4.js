console.log(getUTF16Code("I love you"));

function problem4(word) {
  return treeFrogApp(word);
}

function treeFrogApp(word){
  const eachCharArr = createStringArr(word);
  for(let i = 0; i < eachCharArr.length; i++){
    eachCharArr[i] != " " && (eachCharArr[i] = getTreeFrogChar(getUTF16Code(eachCharArr[i])));
  }
  return getFromCharsToString(eachCharArr);
}

function createStringArr(word){
  return word.split("");
}

function getUTF16Code(char){
  return char.charCodeAt(0);
}

function checkAlphabet(utf16Code){
  return utf16Code >= 65 && utf16Code <= 90 && utf16Code <= 122 && utf16Code >= 97;
}

module.exports = problem4;
