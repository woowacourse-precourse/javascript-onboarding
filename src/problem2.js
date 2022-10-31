// 기능 목록
// 1. 연속하는 중복 문자열 모두 제거

function problem2(cryptogram) {
  
  const array = cryptogram.split('');
  let answer = [];

  for(let i=0; i<array.length; i++){
      let compare = answer[answer.length-1];
      if(answer.length==0) answer.push(array[i]);
      else if (compare !== array[i]) answer.push(array[i]);
      else answer = answer.slice(0,-1);
  };

  return answer.join('');

}

module.exports = problem2;
