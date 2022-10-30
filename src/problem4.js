function problem4(word) {
  let newStr = "";
  let char = word[0];
  if(char >= 'A' && char <= 'Z') {
    newStr += String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
  } else if(char >= 'a' && char <= 'z') {
    newStr += String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
  } else {
    newStr += char;
  }
}

module.exports = problem4;