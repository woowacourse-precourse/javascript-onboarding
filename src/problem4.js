function problem4(word) {
  const wordArray = word.split("");
  let resultString = '';

  wordArray.forEach(char => { 
    if(char.match(/[A-Z]/)){
      resultString += String.fromCharCode(155 - char.charCodeAt());
    }
    else if((char.match(/[a-z]/))){
      resultString += String.fromCharCode(219 - char.charCodeAt());
    }
    else {
      resultString += char;
    }
  });

  return resultString;
}

module.exports = problem4;

console.log(problem4("I love you"));