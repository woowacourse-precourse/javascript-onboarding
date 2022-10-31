function count(str, i) {
  let cnt = str[i];
  while(i < str.length - 1){
    if(str[i] === str[i + 1]){
      cnt += str[i + 1];
      i++;
    }
    else break;
  }
  return cnt;
}

function problem2(cryptogram) {
  while(true){
    var check = true;
    let string;
    for(i = 0; i < cryptogram.length; i++){
      let del = count(cryptogram, i);
      if(del !== cryptogram[i]){
        cryptogram = cryptogram.replace(del, '');
        check = false;
      }
    }

    if(check == true)
      break;
  }
  return cryptogram;
}

module.exports = problem2;
