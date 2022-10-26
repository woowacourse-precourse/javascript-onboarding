function problem2(cryptogram) {
  var answer;

  const stringToArr = string => {
    
    const stringArr = [...string];
    return stringArr;
  };

  const indexDeleter = (splicedArray, index) => {

    splicedArray.splice(index, 1);
    return splicedArray;
  };

  const overlapElementDeleter = array => {
  
    array.map((element, index) => {
      if(element[index] === element[index-1]) {
        array = indexDeleter(array, index);
      }
    })

    return array;
  };

  return answer;
}

module.exports = problem2;
