function problem4(word) {
  let momSaid = "";

  const key = getFrogKey();

  //문자열 바꿔서 붙이기
  for (let char of word) {
    momSaid = momSaid.concat(key[char]);
  }

  return momSaid;
}

function getFrogKey() {
  const key = { " ": " " };

  //65: A ~ 90: Z : 90: Z ~ 65: A
  for (let [i, j] = [65, 90]; i < 90; i++) {
    key[String.fromCharCode(i)] = String.fromCharCode(j--);
  }

  //65: A ~ 90: Z : 90: Z ~ 65: A
  for (let [i, j] = [97, 122]; i < 122; i++) {
    key[String.fromCharCode(i)] = String.fromCharCode(j--);
  }
  return key;
}

module.exports = problem4;
