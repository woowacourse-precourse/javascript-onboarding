function problem2(cryptogram) {
  let arr = [];

  //문자열을 반복하면서 연속하는 중복 문자를 찾고 삭제하는 기능
  for (let i = 0; i < cryptogram.length; i++) {
    if (arr[arr.length - 1] !== cryptogram[i]) {
      arr.push(cryptogram[i])
    } else if (arr[arr.length - 1] === cryptogram[i]) {
      arr.pop()
    }
  }
  return arr.join("")
}

module.exports = problem2;
