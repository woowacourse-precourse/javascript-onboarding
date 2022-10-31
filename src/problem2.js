const isValidCryptogram = (cryptogram) => {
  return typeof cryptogram === "string" && cryptogram.length >= 1 && cryptogram.length <= 1000;
};

function problem2(cryptogram) {
  if (!isValidCryptogram(cryptogram)) return;

  const stack = [];
  let standard = "";

  for (const s of cryptogram) {
    if (standard === s) {
      continue;
    } else if (stack[stack.length - 1] !== s) {
      stack.push(s);
      standard = "";
    } else standard = stack.pop();
  }

  return stack.join("");
}

module.exports = problem2;
