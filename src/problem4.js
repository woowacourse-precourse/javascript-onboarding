function problem4(word){
  let answer = [];
  //영어가 아니라면 변환하지 하지 않는 예외처리
  if(word.match(/[a-zA-Z]/g).length!=word.length){
    console.log("변환하지 않습니다");
  }
  //소문자 배열
  const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //대문자 배열
  const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //배열의 크기
  const SIZE = lower.length;
  for(let i=0; i<word.length; i++){
      //띄워쓰기 처리
      if(word[i]==" "){
          answer.push(" ");
      }
      //소문자라면 인덱스 번호만큼 소문자 배열의 전체크기에서 - 해준다.
      if(lower.includes(word[i])){
          answer.push(lower[SIZE-lower.indexOf(word[i])-1]);
      }
      //대문자 인덱스 번호만큼 대문자 배열의 전체크기에서 - 해준다.
      if(upper.includes(word[i])){
          answer.push(upper[SIZE-upper.indexOf(word[i])-1]);
      }
  }
  //답을 위해 문자열로 변환
   return answer.join("");
}
module.exports = problem4;
