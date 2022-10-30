function problem6(forms) {
  const answer = findEmailForDuplicateNickname(forms);
  return answer;
}
//input: [["abc@email.com","제이제이엠"], ["tell@email.com", "에이다"], ["coco@email.com", "타이어"], ["sson@email.com", "이어폰"]]
//expected output: ["coco@email.com", "sson@email.com"]
const findEmailForDuplicateNickname = (forms) => {
  const nicknameMap = getSeparatedNicknameMap(forms),
    emails = [],
    size = 2;
  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const piece = nickname.substring(i, i + size);
      if (nicknameMap.get(piece) > 1) {
        emails.push(email);
        break;
      }
    }
  });
  return emails.sort();
};
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
