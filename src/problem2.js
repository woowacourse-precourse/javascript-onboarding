function remove_repeat(arr) {
  let cnt = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]) {
      arr.splice(i,2);
      cnt += 1;
    }
  }
  if(cnt == 0) {
    return -1;
  }
  return arr;
}


function problem2(cryptogram) {

  var answer = "";
  let arr_crypto = cryptogram.split('');

  //for (let i = 0; i < cryptogram.length; i++){
  //  com_crypto[i] = cryptogram.indexOf[i];
  //}
  do {
    remove_repeat(arr_crypto);
  } while(remove_repeat(arr_crypto) != -1);

  //while(remove_repeat(arr_crypto) != -1) {
  //  remove_repeat(arr_crypto);
  //}

  answer = arr_crypto.join('');
  return answer;
}

module.exports = problem2;
