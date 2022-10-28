function alphaDict(){
  var alphaRev = {}
  for(var i=0; i<26; i++){
    var smallStart="abcdefghijklmnopqrstuvwxyz".charAt(i);
    var smallEnd="abcdefghijklmnopqrstuvwxyz".charAt(25-i);
    var bigStart="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(i);
    var bigEnd="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(25-i);
    alphaRev[smallStart]=smallEnd;
    alphaRev[bigStart]=bigEnd;
  }
  return alphaRev;
}
function problem4(word) {
  var answer="";
  //기능목록1: 알파벳 저장
  alphaRev=alphaDict();

  return answer;
}
module.exports = problem4;
