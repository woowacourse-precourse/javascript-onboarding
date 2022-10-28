function problem4(word) {
  var answer=[];
  for(let i = 0 ; i < word.length; i++){
    const ascii = word.charCodeAt(i);
    if(ascii>=65 && ascii<=90){
      answer.push(90-ascii+65)
    }
    if(ascii>=97 && ascii<=122){
      answer.push(122-ascii+97)
    }
    if(ascii===32){
      answer.push(32)
    }
  }
  return answer.map((num)=>String.fromCharCode(num)).join('');
}

module.exports = problem4;
