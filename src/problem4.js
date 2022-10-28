function problem4(word) {
  let lesson = word.toUpperCase().split("");
  let idxArr = [];
  let frgArr = [];
  let final = [];
  const normArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const reverseArr = [...normArr].reverse();

  for (let t = 0; t < lesson.length; t++) {
    const index = normArr.indexOf(lesson[t]);
    idxArr.push(index);
  }

  for (let j = 0; j < idxArr.length; j++) {
    idxArr[j] === -1 ? frgArr.push(" ") : frgArr.push(reverseArr[idxArr[j]]);
  }

  const frog = frgArr.join("");

  for (let h = 0; h < frog.length; h++) {
    const regex = /^[A-Z]+$/;
    const testUp = regex.test(word[h]);

    if (testUp === true && frog[h] !== " ") {
      final.push(frog[h].toUpperCase());
    }
    if (testUp === false && frog[h] !== " ") {
      final.push(frog[h].toLowerCase());
    }
    if (frog[h] === " ") {
      final.push(" ");
    }
  }
  const finalStr = final.join("");
  return finalStr;
}

module.exports = problem4;
