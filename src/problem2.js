function problem2(cryptogram) {
  var answer;
    let temp = [];
    temp.push(cryptogram[0]);

    for(let i=1; i<cryptogram.length; i++) {
      if(temp.length === 0) {
        temp.push(cryptogram[i]);
      }
      else {
        if(temp[temp.length-1] === cryptogram[i]) {
          temp.pop();
        }
        else{
          temp.push(cryptogram[i])
        }
      }
    }
  return temp.join("");
}


module.exports = problem2;