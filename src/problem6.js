function problem6(forms) {
  let arr = []
  forms.forEach((element) => {
    const nickArr = element[1].split('')
    for (let i = 0; i < nickArr.length - 1; i++) {
      let nickCheck = nickArr[0] + nickArr[1]
      forms.forEach((data) => {
        if (data[0] === element[0]) {
          return
        } else if (data[1].includes(nickCheck)) {
          arr.push(data[0])
        }
      })
    }
  })

  let arrRemoveOverlap = []
  arr.forEach((element) => {
    if (arrRemoveOverlap.includes(element) === false) {
      arrRemoveOverlap.push(element)
    }
  })
  return arrRemoveOverlap.sort()
}

module.exports = problem6;
