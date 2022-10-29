function problem4(word) {
}

const map = (f, iter) => {
  if (typeof iter === "string") return map(f, [...iter]).join("");
  let res = [];
  for (const item of iter) {
    res.push(f(item));
  }
  return res;
};

module.exports = problem4;
