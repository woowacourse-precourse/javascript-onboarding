function problem2(cryptogram) {
  const crypto = cryptogram.split("");
  console.log(crypto);
  let cry;
  for (let i = 0; i < cryptogram.length; i++) {
    console.log(cryptogram[i]);
    if (cryptogram[i] === cryptogram[i + 1]) {
    }
  }
}

function testCode() {
  testcode = "browoanoommnaon";
  // testcode = "zyelleyz";

  problem2(testcode);
}
testCode();

module.exports = problem2;
