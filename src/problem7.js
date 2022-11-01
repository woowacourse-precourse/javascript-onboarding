function checkIdLength(arr) {
  let i = 0;
  let result;
  arr = arr.flat();
  while (i < arr.length) {
    if (arr[i].length >= 1 && arr[i].length <= 30) {
      i++;
      result = true;
    }
  }
  return result;
}

function problem7(user, friends, visitors) {
  
}

module.exports = problem7;
