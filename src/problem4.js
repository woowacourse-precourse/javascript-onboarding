function problem4(word) {
  class WordTransfer {
    constructor(word) {
      this.word = word;
    }
    transfer() {
      let newWord = ''
      for (let i = 0; i < this.word.length; i++) {
        let temp = this.word.charCodeAt(i)

        if(temp >= 65 && temp <= 90){
          temp = String.fromCharCode(90 - (temp + 25) % 90)
        }
        if(temp >= 97 && temp <= 122){
          temp = String.fromCharCode(122 - (temp + 25) % 122)
        }
        if(temp < 65 || temp > 122 || (temp > 90 && temp < 97)) {
          temp = String.fromCharCode(temp)
        }
        newWord += temp
      }
      return newWord
    }
  }
  const answer = new WordTransfer(word).transfer()
  return answer;
}

module.exports = problem4;
