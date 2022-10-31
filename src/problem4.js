function problem4(word) {
  var answer;
  let arr = [...word];
  let newArr = [];

  for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i].charCodeAt(arr[i]));
  }  
  
  return answer;
}

module.exports = problem4;
