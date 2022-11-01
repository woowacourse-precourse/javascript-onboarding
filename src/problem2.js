function problem2(cryptogram) {
  const result = [cryptogram[0]];
  for (let i = 1; i < cryptogram.length; i++) {
    const current = cryptogram[i];
    if (result[result.length - 1] === current) {
      result.pop();
      continue;
    }
    result.push(current);
  }
  return result.join("");
}

function testCode() {
  testcode = "browoanoommnaon";
  //testcode = "zyelleyz";
  problem2(testcode);
}
testCode();

module.exports = problem2;
