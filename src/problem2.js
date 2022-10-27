function problem2(cryptogram) {
  var answer;

  const stringToArr = string => {
    
    const stringArr = [...string];
    return stringArr;
  };

  const indexDeleter = (splicedArray, index) => {

    splicedArray.splice(index, 2);
    return splicedArray;
  };

  const overlapElementDeleter = array => {

    for(let i=0 ; i < array.length ; i++){
      if(array[i] === array[i+1]){
        array = indexDeleter(array, i);
        if(i>0){
          i = i-2;
        } else if(i = 0) {
          i = 0;
        }
        
      }
    }

    return array;
  };

  const cryptogramToArray = stringToArr(cryptogram);
  const answerArray = overlapElementDeleter(cryptogramToArray);
  answer = answerArray.join("");  

  return answer;
}

module.exports = problem2;
