//[A-Z], [Z-A], [a-z], [z-a] 배열 생성
const upcArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const upcArrRe = [...upcArr].reverse();
const lowercArr = [...upcArr].map(n => n.toLowerCase());
const lowercArrRe = [...lowercArr].reverse();


//입력된 값을 나누어 배열로 변환
const inputString = (sentence) => {
  const inputArr = sentence.split("")
  
  //2번에서 받은 값을 1번의 배열에서 반대 문자의 인덱스 값을 참조
  const answer = []
  for (let i = 0; i < inputArr.length; i++){
    if (inputArr[i].charCodeAt() >= 65 && inputArr[i].charCodeAt() <= 90 ) {
      const numIndex1 = upcArr.indexOf(inputArr[i]);
      answer.push(upcArrRe[numIndex1]);
    }
    else if (inputArr[i].charCodeAt() >= 97 && inputArr[i].charCodeAt() <= 122) {
      const numIndex2 = lowercArr.indexOf(inputArr[i]);
      answer.push(lowercArrRe[numIndex2]);
    }
    else if (inputArr[i] === " ") {
      answer.push(" ");
    }
  } return answer.join('');
}


function problem4(word) {
   return inputString(word);
}

module.exports = problem4;
