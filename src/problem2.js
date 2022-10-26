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

  return answer;
}

module.exports = problem2;
