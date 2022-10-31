function problem6(forms) {
  const answer = []
  const name = new Map()
  // name set에 이름 2글짜씩 끊어서 저장

  forms.forEach((form) => {
    Array.from(form[1]).forEach((_, index) => {
      if (index < form.length - 1) {
        if (name.get(form[1].slice(index, index + 2))) {
          name.set(
            form[1].slice(index, index + 2),
            name.get(form[1].slice(index, index + 2)) + 1
          )
        } else {
          name.set(form[1].slice(index, index + 2), 1)
        }
      }
    })
  })

  const moreThanTwoPeople = Array.from(name).map((people) => {
    if (people[1] >= 2) return people[0]
  })

  forms.forEach((form) => {
    if (moreThanTwoPeople.some((name) => form[1].includes(name))) {
      answer.push(form[0])
    }
  })

  return answer.sort()
}

module.exports = problem6
