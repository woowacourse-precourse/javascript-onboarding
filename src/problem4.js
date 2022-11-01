function problem4(word) {
  let upperData = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  let lowerData = upperData.toLowerCase();

  upperData = upperData.split("");
  lowerData = lowerData.split("");

  word = word.split("");

  word = word.map((alpha) => {
    if ("a" <= alpha && alpha <= "z")
      return lowerData[lowerData.length - 1 - lowerData.indexOf(alpha)];
    else if ("A" <= alpha && alpha <= "Z")
      return upperData[upperData.length - 1 - upperData.indexOf(alpha)];

    return alpha;
  });
  return word.join("");
}

module.exports = problem4;
