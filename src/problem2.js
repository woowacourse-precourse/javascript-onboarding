function problem2(cryptogram) {
  let answer = [...cryptogram];
  const set = new Set(answer);
  const uniqueArr = [...set];
  return uniqueArr;
}

module.exports = problem2;
