function changeAscii(ascii, middleAscii) {
  const asciiGap = ascii > middleAscii ? 2 * (middleAscii + 1 - ascii) - 1 : 2 * (middleAscii - ascii) +1;
 
  return ascii + asciiGap;
}

function changeWord(ascii){
  const ASCII_A = 65;
  const ASCII_Z = 90;
  const ASCII_a = 97;
  const ASCII_z = 122;
  const MIDDLE_UPPER_ASCII = 77;
  const MIDDLE_LOWER_ASCII = 109;

  if(ascii>=ASCII_A && ascii<=ASCII_Z){
    return changeAscii(ascii, MIDDLE_UPPER_ASCII);
  }

  if(ascii>=ASCII_a && ascii<=ASCII_z){
    return changeAscii(ascii, MIDDLE_LOWER_ASCII);
  }

  return ascii;
}

function getChangedWord(word) {
  const wordArr = Array.from(word,(el) => el.charCodeAt()).reduce((acc,cur)=>{
    const newWord = String.fromCharCode(changeWord(cur));
    return [...acc, newWord];
  },[]);

  return wordArr.join('');
}

function problem4(word) {
  const answer = getChangedWord(word)
  return answer;
}

module.exports = problem4;
