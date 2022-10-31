const head_u = "A".charCodeAt(0);
const tail_u = "Z".charCodeAt(0);
const head_l = "a".charCodeAt(0);
const tail_l = "z".charCodeAt(0);

const isAlpha = (charcode) =>
  (charcode >= head_u && charcode <= tail_u) ||
  (charcode >= head_l && charcode <= tail_l);

const stringToCharcodeArr = (word) =>
  word.split("").map((char) => char.charCodeAt(0));

const gap = (a, b) => a - b;

function problem4(word) {
  const result = stringToCharcodeArr(word).reduce((reduced, charcode) => {
    const copy = reduced.slice();
    if (isAlpha(charcode)) {
      const isLower = charcode >= head_l;
      const reversedCharcode = isLower
        ? tail_l - gap(charcode, head_l)
        : tail_u - gap(charcode, head_u);

      copy.push(String.fromCharCode(reversedCharcode));
    } else copy.push(String.fromCharCode(charcode));

    return copy;
  }, []);

  return result.join("");
}

module.exports = problem4;
