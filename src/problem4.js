function problem4(word) {
  let newStr = "";
  for(let i=0; i<word.length; i++) {
    let char = word[i];
    if(char >= 'A' && char <= 'Z') {
      newStr += String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
    } else if(char >= 'a' && char <= 'z') {
      newStr += String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
    } else {
      newStr += char;
    }
  }
  return newStr;
}

module.exports = problem4;