function problem2(cryptogram) {
  var answer;
  return answer;
//같은 문자들을 지워주는 함수
const eraseArray = (cryptogram, index) => {
  let count = 1; //자르는 갯수
  let j = index;

  //같지 않을때 까지 인덱스를 증가시킨다.
  while (cryptogram[j] === cryptogram[j+1]) {
      count++;
      j++;
  }

  //같은 갯수만큼 잘라준다.
  cryptogram.splice(index, count);
}

//메인 함수
const problem2 = (cryptogram) => {
  //자르기 편하게 배열로 변환
  cryptogram = cryptogram.split("");
  
  while(1){
    let status = 1;
    for(let i = 0; i < cryptogram.length; i++){
        //이전 인덱스와 현재 인덱스의 값이 같다면
        if (cryptogram[i] === cryptogram[i+1]) {
        eraseArray(cryptogram, i);
        status = 0;
        i--;
        }
    }
    if(status) break;
  }
  
  //다시 문자열로 변환후 return
  return (cryptogram.join(""))
}

module.exports = problem2;
