function problem2(cryptogram) {
  let arr = Array.from(cryptogram);
  let newArr = [];

  arr.map((data) => {
    if (newArr.length < 1) {
      newArr.push(data);
    } else {
      if (data === newArr[newArr.length - 1]) {
        newArr.pop();
      } else {
        newArr.push(data);
      }
    }
  });
  return newArr.join("");
}

module.exports = problem2;
