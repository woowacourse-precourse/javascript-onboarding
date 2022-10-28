const findAlpabat = (asciiNum) => {
  if((65 <= asciiNum && asciiNum <= 90) || (97 <= asciiNum && asciiNum <= 122)) {
    console.log("범위내 있음")
  }
  else {
    console.log("범위내 없음");
  }
}

function problem4(word) {
  for(let i = 0; i<word.length; i++) {
    findAlpabat(word.charCodeAt(i));
  }
}

console.log(problem4("I love you"));

module.exports = problem4;
