function problem4(word) {
  return changeReverseDictionary(word);
}

function convertUnicode(char) {
  return char.charCodeAt();
}

function isLower(unicodeChar, START_POINT = 97, END_POINT = 122) {
  return START_POINT <= unicodeChar && unicodeChar <= END_POINT ? true : false;
}

function isUpper(unicodeChar, START_POINT = 65, END_POINT = 90) {
  return START_POINT <= unicodeChar && unicodeChar <= END_POINT ? true : false;
}

function convertUpperToReverseDictionary(unicodeChar, START_POINT = 65, END_POINT = 90) {
  return String.fromCharCode(END_POINT - unicodeChar + START_POINT);
}

function convertLowerToReverseDictionary(unicodeChar, START_POINT = 97, END_POINT = 122) {
  return String.fromCharCode(END_POINT - unicodeChar + START_POINT);
}

function changeReverseDictionary(word) {
  let _char = '';
  let convertedChar;

  for (const char of word) {
    convertedChar = convertUnicode(char);
    if (isUpper(convertedChar)) {
      _char += convertUpperToReverseDictionary(convertedChar);
    } else if (isLower(convertedChar)) {
      _char += convertLowerToReverseDictionary(convertedChar);
    } else {
      _char += char;
    }
  }

  return _char;
}

module.exports = problem4;
