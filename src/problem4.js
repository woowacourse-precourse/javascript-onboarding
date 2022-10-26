function problem4(word) {
  var answer;
  const key = getFrogKey();
  console.log(key);
  return answer;
}

problem4();

module.exports = problem4;

function getFrogKey() {
  //65~90 : 90~65
  const key = {};

  //65: A ~ 90: Z : 90: Z ~ 65: A
  for (let [i, j] = [65, 90]; i < 90; i++) {
    key[i] = j--;
  }

  //65: A ~ 90: Z : 90: Z ~ 65: A
  for (let [i, j] = [97, 122]; i < 122; i++) {
    key[i] = j--;
  }

  return key;
}
