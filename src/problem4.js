function calculateAscii(a, z, charToAscii){
    return Math.abs(z - (charToAscii - a));
}

function problem4(word) {
  let answer = [];
  let charToAscii = "";
  const upperCaseA = 65;
  const upperCaseZ = 90;
  const lowerCaseA = 97;
  const lowerCaseZ = 122;

  for (let i=0; i<word.length; i++){
      charToAscii = word.charCodeAt(i);
      if (charToAscii > lowerCaseA-1 && charToAscii < lowerCaseZ+1){
        answer.push(String.fromCharCode(calculateAscii(lowerCaseA, lowerCaseZ, charToAscii)));     
      }else if (charToAscii > upperCaseA-1 && charToAscii < upperCaseZ+1){
        calAscii = calculateAscii(upperCaseA, upperCaseZ, charToAscii);
          answer.push(String.fromCharCode(calculateAscii(upperCaseA, upperCaseZ, charToAscii)));
      }else{
          answer.push(" ");
      }
  }
  return answer.join('');
}

module.exports = problem4;
