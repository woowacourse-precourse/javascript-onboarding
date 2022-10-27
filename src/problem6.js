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

function getAllSameWord(forms) {
  let index = 0;
  let sameWordArray = [];

  while (index < forms.length) {
    let count = index + 1;
    while (count < forms.length) {
      if (getSameWord(forms[index][1], forms[count][1]) != "") {
        sameWordArray.push(getSameWord(forms[index][1], forms[count][1]));
      }
      count++;
    }
    index++;
  }

  const uniqueArray = new Set(sameWordArray);
  return [...uniqueArray];
}

module.exports = problem6;
