//[A-Z], [Z-A], [a-z], [z-a] 배열 생성
const upcArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const upcArrRe = [...upcArr].reverse();
const lowercArr = [...upcArr].map(n => n.toLowerCase());
const lowercArrRe = [...lowercArr].reverse();


//입력된 값을 나누어 배열로 변환
const inputString = (sentence) => {
  return sentence.split("")
}




// function problem4(word) {
//   var answer;
//   return answer;
// }

// module.exports = problem4;
