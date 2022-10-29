function problem6(forms) {
  var answer;
  return answer;
}

function setTwoLetters(nickname) {
  let twoLettersArr = nickname.split('').reduce((acc, cur, idx) => {
    if (idx !== nickname.length - 1) {
      acc.push(cur + nickname[idx + 1]);
    }
    return acc;
  }, []);

  return [...new Set(twoLettersArr)];
}

module.exports = problem6;
