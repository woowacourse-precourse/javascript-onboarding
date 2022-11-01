function problem4(word) {
  const answer = [...word].map(item => {
    let ascii = item.charCodeAt(0);
    if(ascii >= 65 && ascii <= 90){
      ascii = 155 - ascii;
    } else if(ascii >= 97 && ascii <= 122){
      ascii = 219 - ascii;
    }
    return String.fromCharCode(ascii);
  })
  return answer.join('');
}

module.exports = problem4;
