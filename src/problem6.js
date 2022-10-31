const emailFormat = /[a-z0-9]+@email.com/;
const koreanFormat = /^[ㄱ-ㅎ|가-힣]+$/;
// TODO: +$

const isAvailableEmail = (email) => {
  if (email.length < 11 || email.length >= 20) return false;
  if (!emailFormat.test(email)) return false;
  return true;
};

const isAvailableNickname = (nickname) => {
  if (nickname.length < 1 || nickname >= 20) return false;
  if (!koreanFormat.test(nickname)) return false;
  return true;
};

function problem6(forms) {
  let patternList = new Map();
  let result = new Set();

  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];

    if (!isAvailableEmail(email) || !isAvailableNickname(nickname)) continue;

    for (let j = 0; j < nickname.length - 1; j++) {
      const pattern = nickname.substr(j, 2);
      if (patternList.has(pattern)) {
        const initialDuplicatedEmail = patternList.get(pattern);
        if (!result.has(initialDuplicatedEmail)) result.add(initialDuplicatedEmail);
        result.add(email);
      } else {
        patternList.set(pattern, email);
      }
    }
  }

  return [...result].sort();
}

module.exports = problem6;
