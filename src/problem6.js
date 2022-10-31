function problem6(forms) {
}
// 연속으로 중복된 문자들을 모은 배열 생성
function getConsecutiveStr(nickname){
  let wordList = new Set();
  for(let i =0;i<nickname.length;i++){
    for(let j = i+2;j<=nickname.length;j++){
      wordList.add(nickname.substring(i,j))
    }

  } console.log([...wordList])
}


module.exports = problem6;
