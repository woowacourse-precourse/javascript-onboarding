const NORMAL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FROGDICTION = NORMAL.split('').reverse();

function problem4(word) {
  var answer;

  frogDiction(word);
  console.log(frogDiction(word));
  return answer;
}


function frogDiction(word) {
  let result = "";
  for (i = 0; i <= word.length; i++) {
    if (word[i] === ' ') result += word[i];
    else {
      const convertWord = FROGDICTION[NORMAL.split('').indexOf(word[i])];
      result += convertWord;
    }
  } 
  return result;
}

problem4("I LOVE YOU");


module.exports = problem4;