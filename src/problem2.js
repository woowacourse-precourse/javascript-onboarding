function problem2(cryptogram) {

  let word = cryptogram
  let verify = true

  while(true){
    verify = true
    for(let i = 0; i < word.length - 1; i++){
      if(word[i] == word[i + 1]){
        let temp1 = word.substr(0, i)
        let temp2 = word.substr(i + 2, word.length)

        word = temp1 + temp2
        verify = false
        break
      }
    }
    if(verify == true){
      return word
    }
  }
}

module.exports = problem2;
