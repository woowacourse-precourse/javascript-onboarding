function problem2(cryptogram) {
  let arr = [];
  
  for(let i=0; i<cryptogram.length; i++){
    if(arr.length === 0){
      arr.push(cryptogram[i])
    }
    else if(arr.length !== 0){
      arr.push(cryptogram[i])
      if(arr[arr.length-1] === arr[arr.length-2]){
        arr.pop()
        arr.pop(arr[arr.length-2])
      }
    }
  }
  return arr.join('')
}

module.exports = problem2;
