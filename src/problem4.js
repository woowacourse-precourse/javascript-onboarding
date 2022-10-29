function problem4(word) {
  const wordArray = word.split("");
  let resultString = '';

  wordArray.forEach(char => { 
    console.log(String.fromCharCode(155 - char.charCodeAt()));
    console.log(String.fromCharCode(219 - char.charCodeAt()));
    console.log(char);

  });
}

module.exports = problem4;

console.log(problem4("I love you"));