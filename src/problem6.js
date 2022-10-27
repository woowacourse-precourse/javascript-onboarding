function getSameWord(crew1, crew2) {
  let crew1Array = crew1.split("");
  let crew2Array = crew2.split("");
  let sameWord = "";

  crew1Array.map((word1, index1) => {
    crew2Array.map((word2, index2) => {
      if (
        word1 == word2 &&
        crew1Array[index1 + 1] == crew2Array[index2 + 1] &&
        crew1Array[index1 + 1] != undefined
      ) {
        sameWord = word1 + crew1Array[index1 + 1];
      }
    });
  });

  return sameWord;
}

module.exports = problem6;
