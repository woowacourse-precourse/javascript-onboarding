function getSameWord(crew1Name, crew2Name) {
  const crew1Array = crew1Name.split("");
  const crew2Array = crew2Name.split("");
  let sameWord = "";

  crew1Array.map((word1, index1) => {
    crew2Array.map((word2, index2) => {
      if (
        word1 == word2 &&
        crew1Array[index1 + 1] != undefined &&
        crew1Array[index1 + 1] == crew2Array[index2 + 1]
      ) {
        sameWord = word1 + crew1Array[index1 + 1];
      }
    });
  });

  return sameWord;
}

function getAllSameWord(forms) {
  let sameWordArray = [];

  forms.map((form, index) => {
    let count = index + 1;
    while (count < forms.length) {
      if (getSameWord(form[1], forms[count][1]) != "") {
        sameWordArray.push(getSameWord(form[1], forms[count][1]));
      }
      count++;
    }
  });

  const uniqueWordSet = new Set(sameWordArray);
  return [...uniqueWordSet];
}

function gatherCrew(forms) {
  const sameWordArray = getAllSameWord(forms);
  let crewEmailArray = [];

  sameWordArray.map((word) => {
    forms.map((form) => {
      if (form[1].includes(word)) {
        crewEmailArray.push(form[0]);
      }
    });
  });

  return crewEmailArray;
}

function problem6(forms) {
  const sortEmailArray = gatherCrew(forms).sort();
  return sortEmailArray;
}

module.exports = problem6;
