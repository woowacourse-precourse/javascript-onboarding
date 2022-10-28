function problem2(cryptogram) {
  const answer = reduceWord(cryptogram);
  // console.log(`prev : ${cryptogram}`)
  // console.log(`next : ${answer}`)
  return answer;
}

const reduceWord = (word) => {
  let charSet = Array.from(new Set(word.split('')));
  let new_word = word
  for(let i = 0 ; i<charSet.length; i++){
    for(let j = 0 ; j<new_word.length; j++){
      // console.log(new_word.match(/(\w)\1/))
      // new_word = new_word.replace(/(\w)\1/,'')
      new_word = new_word.replace(/([a-z])\1{1,}/,'')
    }
  }
  return new_word
}

module.exports = problem2;
