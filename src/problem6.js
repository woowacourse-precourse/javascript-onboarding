function problem6(forms) {
  var answer;
  return answer;
}
const getSeparatedNicknameMap = (forms) => {
  const map = new Map(),
    size = 2;
  forms.forEach(([_, nickname]) => {
    const pieces = [];
    for (let i = 0; i < nickname.length - 1; i++) {
      const piece = nickname.substring(i, i + size);
      pieces.push(piece);
    }
    pieces.sort();
    pieces.forEach((piece, i) => {
      if (piece != pieces[i - 1]) {
        const count = map.has(piece) ? map.get(piece) + 1 : 1;
        map.set(piece, count);
      }
    });
  });
  return map;
};

module.exports = problem6;
