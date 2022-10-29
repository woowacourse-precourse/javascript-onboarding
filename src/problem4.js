function problem4(word) {
  return treeFrogApp(word);
}

function treeFrogApp(word){
  const eachCharArr = createStringArr(word);
  for(let i = 0; i < eachCharArr.length; i++){
    eachCharArr[i] = getTreeFrogChar(eachCharArr[i]);
  }
  return getFromCharArrToString(eachCharArr);
}

function createStringArr(word){
  return word.split("");
}

function getFromCharToUTF16Code(char){
  return char.charCodeAt(0);
}

function getFromUTF16CodeToChar(utf16Code){
  return String.fromCharCode(utf16Code);
}

function getFromCharArrToString(charArr){
  return charArr.join('');
}

function checkAlphabet(utf16Code){
  return (utf16Code >= 65 && utf16Code <= 90) || (utf16Code <= 122 && utf16Code >= 97);
}

function getTreeFrogChar(char){
  let utf16Code = getFromCharToUTF16Code(char);
  if (checkAlphabet(utf16Code)){
    utf16Code>=97?utf16Code=219-utf16Code:utf16Code=155-utf16Code;
  }
  return getFromUTF16CodeToChar(utf16Code);
}

module.exports = problem4;
