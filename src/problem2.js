function problem2(cryptogram) {
  const deleteDouble = () => {
    const inputStr = cryptogram;
    const arr = inputStr.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) {
        arr.splice(i - 1, 2);
        i = i - 2;
      }
    }

    const newArr = arr.toString().replaceAll(",", "");

    return newArr;
  };
  var answer = deleteDouble();
  return answer;
}

module.exports = problem2;
