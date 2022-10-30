function problem4(word) {
  var answer;

  //1. word string 을 ascii 코드로 전환 

  let wordArray = word.split('');

  wordArray.forEach(function(char){
    console.log(char + ": " + char.charCodeAt(0));
  })


  return answer;
}


problem4("I love you");

module.exports = problem4;
