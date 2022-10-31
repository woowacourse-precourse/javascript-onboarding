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
  function transWord() {
    const outWord = [];
    alphaItem.forEach(alpha => {
      if(alpha === " ") {
        outWord.push(" ");
      }
    if(alpha === alpha.toUpperCase()) {   //I love you
        for (i = 0; i < upperAlphabetArr.length; i++){
          if(alpha === upperAlphabetArr[i]){
            outWord.push(upperStrangeAlphabetArr[i]);
          }
        }
      } 
    else if(alpha === alpha.toLowerCase()){
        for (i = 0; i < alphabetArr.length; i++){
          if(alpha === alphabetArr[i]){
            outWord.push(strangeAlphabetArr[i]);
          }
        }
      }
    });
  }
}

module.exports = problem4;
