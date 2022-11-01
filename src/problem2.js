function problem2(cryptogram) {
  var answer;
  let cryptoAry = cryptogram.split("");

  function scan(array) {
    let count = 1;
    let temp;

    for (let i = 0; i < array.length; i++, count = 1) {
      temp = array[i];
      if (temp === array[i + 1]) {
        for (let j = i + 1; temp === array[j]; j++) {
          count++;
        }
        array.splice(i, count);
        i--;
      }
    }
    return array;
  }

  let tempAry = scan(cryptoAry);

  while (true) {
    if (tempAry === scan(tempAry)) {
      tempAry == scan(tempAry);
      break;
    }
    tempAry = scan(tempAry);
  }
  tempAry = scan(tempAry);



  answer = tempAry.join("");
  console.log(answer);
  return answer;
}

module.exports = problem2;
