function problem2(cryptogram) {
  //cryptogram를 ''단위로 쪼개서 cryptogram_arr에 배열로 반환
  let cryptogram_arr = cryptogram.split('');

  let i = 0;
  while(i != cryptogram_arr.length){
    if(cryptogram_arr[i] == cryptogram_arr[i+1]){
      cryptogram_arr.splice(i, 2)
      i = 0
    }else{
      i += 1
    }
  }
  return cryptogram_arr.join('');
}

module.exports = problem2;
