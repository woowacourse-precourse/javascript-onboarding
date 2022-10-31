function problem4(word) {
  var answer;
  return answer;
}
const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const strangeAlphabetArr = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];
const upperAlphabetArr = [];
const upperStrangeAlphabetArr = [];
alphabetArr.forEach(element => {
  upperAlphabetArr.push(element.toUpperCase());
});
strangeAlphabetArr.forEach(element => {
  upperStrangeAlphabetArr.push(element.toUpperCase());
});

function makeString(word) {
  let alphaItem = [];
  for(i = 0; i < word.length; i++) {
    alphaItem.push(word.substring(i, i+1));
  }
}
module.exports = problem4;
