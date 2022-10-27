function problem4(word) {
  let lesson = word.toUpperCase().split("");
  let frog = [];

  const normArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const reverseArr = [...normArr].reverse();

  for (let t = 0; t < lesson.length; t++) {
    const index = normArr.indexOf(lesson[t]);
    frog.push(index);
  }
}

module.exports = problem4;
