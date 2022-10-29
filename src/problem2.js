function problem2(cryptogram) {
  const array = [];

  //중복 문자 제거 함수
  for(let i = 0; i < cryptogram.length; i++){
    if(array[array.length - 1 ] === cryptogram[i] ){
      array.pop();
    }else{
      array.push(cryptogram[i]);
    }
  }
}

module.exports = problem2;
