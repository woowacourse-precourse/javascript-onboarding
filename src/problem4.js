function problem4(word) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";

  return word
    .split("")
    .map((i) => {
      if (upper.includes(i))
        return String.fromCharCode(60 + 95 - i.charCodeAt());
      else if (lower.includes(i))
        return String.fromCharCode(97 + 122 - i.charCodeAt());
      else return String.fromCharCode(i.charCodeAt());
    })
    .join("");
}

module.exports = problem4;
