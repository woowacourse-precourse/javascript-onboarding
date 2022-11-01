function problem4(word) {
  var answer= ""
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //26
  for(let i = 0 ; i < word.length; i++){
      let index 
      if (alphabet.includes(word[i])){ 
          index = 26-alphabet.indexOf(word[i])-1
          answer += alphabet[index]
      }
      else if (alphabet.toLowerCase().includes(word[i])){ 
          index = 26-alphabet.toLowerCase().indexOf(word[i])-1
          answer += alphabet[index].toLowerCase()
      }
      else if (word[i]===" ") answer += " "

  }

  return answer;
}

module.exports = problem4;
