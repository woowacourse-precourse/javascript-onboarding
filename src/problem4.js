function problem4(word) {
  let answer = ""

  word.split("").forEach((char) => {
    const asciiCode = char.charCodeAt(0)

    if (asciiCode >= 97 && asciiCode <= 122) {
      const index = asciiCode - 97
      const newAsciiCode = 122 - index
      answer += String.fromCharCode(newAsciiCode)
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      const index = asciiCode - 65
      const newAsciiCode = 90 - index
      answer += String.fromCharCode(newAsciiCode)
    } else {
      answer += char
    }
  })

  return answer
}

module.exports = problem4
