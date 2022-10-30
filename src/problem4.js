const chageToFrogChar = (char) => {
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
