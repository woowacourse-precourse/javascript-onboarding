function problem2(cryptogram) {
  var answer=""
  let word = cryptogram
  while(true){
    let first = 0
    let second = first + 1
    for(let i =0 ; i< word.length+1; i++){
      if(word[first]==word[second]){
        first += 2
        second = first + 1
        continue
      }
      answer += word[first]
      first += 1
      second = first + 1
    }
    if(word === answer) break
    word = answer
    answer = "" 
  }
  return answer;
}

module.exports = problem2;
