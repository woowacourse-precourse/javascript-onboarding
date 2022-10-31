function problem2(cryptogram) {
  const cryptogramArr = [...cryptogram];

  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] !== cryptogramArr[i + 1]) {
    }
  }
}

let cryptogram = "browoanoommnaon";
console.log(problem2(cryptogram));
module.exports = problem2;
