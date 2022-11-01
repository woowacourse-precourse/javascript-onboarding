function problem4(word) {
  const word_arr = word.split("");
  const answer = word_arr.map((char) => {
    if(char>= 'a' && char <= 'z'){
      let asc = 219 - char.charCodeAt(0);
      return String.fromCharCode(asc);
    } else if(char >="A" && char <="Z" ) {
      let asc = 155 - char.charCodeAt(0);
      console.log(String.fromCharCode(asc).toLowerCase());
      return String.fromCharCode(asc);
    }else{
      return char;
    }
  })

  return answer.join("");
}

module.exports = problem4;
