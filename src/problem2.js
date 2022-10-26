function problem2(cryptogram) {
  let answer = "";
  const arr = [...cryptogram];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i + 1]) {
      answer += arr[i];
    } else {
      i ++;
    }
  }

  return answer;
}

module.exports = problem2;
