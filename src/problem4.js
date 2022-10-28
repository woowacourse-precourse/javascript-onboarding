function problem4(word) {
  var answer;
  let arr = [...word];
  let result = [];

  for(let i=0;i<arr.length;i++){
    const ascii = arr[i].charCodeAt(0);

    if(ascii >= 65 && ascii <= 90){
      arr[i] = String.fromCharCode(155-ascii);
    } 
  }
  return answer;
}

module.exports = problem4;
