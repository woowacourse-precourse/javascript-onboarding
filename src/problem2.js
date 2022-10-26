function problem2(cryptogram) {
  let count = cryptogram.length;
  let newString = cryptogram
  let flag = true;
  while (flag){
    for(let num = 'a'.charCodeAt(0); num < 'z'.charCodeAt(0) + 1; num++){
      const regex = new RegExp(`${String.fromCharCode(num)}{2}`, 'g');
      newString = newString.replace(regex, '');
    }
    if (newString.length < count){
      count = newString.length;
    }else{
      flag = false;
    }
  }
  return newString;

}

module.exports = problem2;
