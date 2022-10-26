/**
 * | cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |
 * @param {*} cryptogram
 * @returns
 */
function problem2(cryptogram) {
  const map = new Map();
  let result = "";
  for (let i = 0; i < cryptogram.length; i++) {
    map.set(
      cryptogram.split("")[i],
      (map.get(cryptogram.split("")[i]) || 0) + 1
    );
  }
  for (const [key, value] of map) {
    if (value % 2 == 1) {
      result += key;
    }
  }
  return result;
}
module.exports = problem2;
