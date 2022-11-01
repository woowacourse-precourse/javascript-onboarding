const isEqualWithLastChar = (ch, arr) => ch === arr[arr.length - 1];

const removeDuplicatedChar = (acc, ch) => {
  if (isEqualWithLastChar(ch, acc)) return acc.slice(0, -1);
  return [...acc, ch];
};

function problem2(cryptogram) {
  const chList = cryptogram.split("");
  return chList.reduce(removeDuplicatedChar, []).join("");
}

module.exports = problem2;
