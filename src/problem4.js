function problem4(word) {
  var answer = "";
  var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  for (let x of word) {
    if (x.charCodeAt()<65){answer += x; continue}
    if (x.charCodeAt()>122){answer += x; continue}
    if (x.charCodeAt()>90 && x.charCodeAt()<97){answer += x; continue}
    //알파벳 이외문자 예외처리
    let check = x.toUpperCase();
    let checkidx = (element) => element == check;
    let index = alpha.findIndex(checkidx)
    console.log(index)
    if(x.charCodeAt()>=65 && x.charCodeAt()<=90) {
      answer += alpha[25 - index]} else {
      answer += alpha[25 - index].toLowerCase();}
  }
  //알파벳 변환해서 새로운 문자열에 넣기
  return answer;

}

module.exports = problem4;
