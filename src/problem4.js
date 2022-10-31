function problem4(word) {
  return treeFrogApp(word);
}

function treeFrogApp(word){
  const eachCharArr = createStringArr(word);
  for(let i = 0; i < eachCharArr.length; i++){
    eachCharArr[i] = convertTreeFrogChar(convertUTF16(eachCharArr[i]));
  }
  return convertString(eachCharArr);
}

function createStringArr(word){
  return word.split("");
}

function convertTreeFrogChar(utf16Code){
  return checkAlphabet(utf16Code)?convertChar(convertReverseCode(utf16Code)):convertChar(utf16Code);
}

function checkAlphabet(utf16Code){
  return ( 65 <= utf16Code && utf16Code <= 90) || ( 97 <= utf16Code && utf16Code <= 122);
}

function convertChar(utf16Code){
  return String.fromCharCode(utf16Code);
}

function convertReverseCode(utf16Code){
  return checkLowerCase(utf16Code)?219-utf16Code:155-utf16Code;
}

function convertUTF16(char){
  return char.charCodeAt(0);
}

function convertString(charArr){
  return charArr.join('');
}

function checkLowerCase(utf16Code){
  return utf16Code>=97;
}

module.exports = problem4;
