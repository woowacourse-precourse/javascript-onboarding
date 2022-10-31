function problem4(word) {
  var answer;
  let arr = [...word];
  let newArr = [];

  for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i].charCodeAt(arr[i]));
  }  
  
  for (let j=0; j<newArr.length; j++) {
    if (newArr[j] > 64 && newArr[j] < 91) {
      newArr[j] = 155 - newArr[j];
    } else if (newArr[j] > 96 && newArr[j] < 123) {
      newArr[j] = 219 - newArr[j];
    }
  }
  return answer;
}

module.exports = problem4;
