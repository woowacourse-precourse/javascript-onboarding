function problem4(word) {
  var answer = "";
  var alpha = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
  var alphaReverse = alpha.sort()
  for (let x of word) {
    if (x.charCodeAt()<65){answer += x; continue}
    if (x.charCodeAt()>122){answer += x; continue}
    if (x.charCodeAt()>90 && x.charCodeAt()<97){answer += x; continue}
    //알파벳 이외문자 예외처리
    
    let check = x.toUpperCase()
  }
  return answer;

}

module.exports = problem4;
