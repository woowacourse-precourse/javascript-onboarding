function problem4(word) {
  let answer = "";
  let letter = "azA";
  const a = letter.charCodeAt(0)
  const z = letter.charCodeAt(1)
  const A = letter.charCodeAt(2)
  const difference = z - a;
  for (let i = 0; i < word.length; i++) {
    let text = word[i];
    if (text === " ") {
      answer += ' ';
    }
    else if (text.charCodeAt(0) < A || text.charCodeAt(3) > z){
      answer += ' ';
    }
    else if (isupper(text)) {
      answer += String.fromCharCode((difference - (text.charCodeAt(0)-A))+A)
    }
    else {
      answer += String.fromCharCode((difference - (text.charCodeAt(0)-a))+a)
    }
  }
  return answer;
}

function isupper(character) {
  if (character == character.toLowerCase())
  {
    return false;
  }
  else
  {
    return true;
  }
}

module.exports = problem4;