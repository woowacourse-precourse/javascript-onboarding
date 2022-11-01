function problem4(word) {
  let frogWord = '';
  let upperCodeA = 65;
  let upperCodeZ = 90;
  let lowerCodeA = 97;
  let lowerCodeZ = 122;

  let wordsArr = [...word]

  wordsArr.forEach((element, index) => {
      let codeNum = word.charCodeAt(index)
      if (codeNum >= upperCodeA && codeNum <= upperCodeZ) { 
        frogWord += String.fromCharCode(upperCodeZ + upperCodeA - codeNum);
      } else if (codeNum >= lowerCodeA && codeNum <= lowerCodeZ) { 
        frogWord += String.fromCharCode(lowerCodeZ + lowerCodeA - codeNum);   
      } else {
        frogWord += element;
      }
    })
  return frogWord;
}

module.exports = problem4;
