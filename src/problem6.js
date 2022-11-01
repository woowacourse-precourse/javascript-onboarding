function problem6(forms) {
  const answer = []
  const name = new Map()

  for (const [email, nickname] of forms) {
    for (let i = 0; i < nickname.length - 1; i++) {
      const subNickname = nickname.slice(i, i + 2)
      if (name.has(subNickname)) {
        answer.push(email)
        answer.push(name.get(subNickname))
      }
    }

    for (let i = 0; i < nickname.length - 1; i++) {
      const subNickname = nickname.slice(i, i + 2)
      name.set(subNickname, email)
    }
  }
  return [...new Set(answer)].sort()
}

module.exports = problem6
