function problem4(word) {
  const lower = {
    start:97,
    end:122
  }
  const upper = {
    start:65,
    end:90
  }

  const momWord = word.split("")
  var answer;

  momWord.forEach((element,index) => {
    if(element === " ") return
    if(element == element.toLowerCase()){
      momWord[index] = String.fromCharCode(lower.start - word.charCodeAt(index) + lower.end)
    }
    if(element == element.toUpperCase()){
      momWord[index] = String.fromCharCode(upper.start - word.charCodeAt(index) + upper.end)
    }
  });
  answer = momWord.join("");
  return answer;
}

module.exports = problem4;
