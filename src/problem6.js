function problem6(forms) {
  var answer;
  const crew = [];
  for (const [email, nickname] of forms) {
    crew.push({ email: email, nickname: nickname });
  }

  return answer;
}

module.exports = problem6;
