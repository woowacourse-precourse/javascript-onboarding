const chageToFrogChar = (char) => {
  const ascii = char.charCodeAt(0);
  if(ascii >= 65 && ascii <= 90) return String.fromCharCode(155 - ascii);
  if(ascii >= 97 && ascii <= 122) return String.fromCharCode(219 - ascii); 
  return char;
}

function problem4(word) {
  const chars = [];
  for(let i = 0; i < word.length; i++){
    chars.push(chageToFrogChar(word[i]));
  }
  
  return chars.join("");
}

module.exports = problem4;
