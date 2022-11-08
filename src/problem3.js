function problem3(number) {
  return game369App(number);
}

function game369App(number) {
  return getCount369(createNumberCollection(number));
}

function createNumberCollection(number) {
  return Array.from({ length: number }, (_, idx) => idx + 1).join("").split("");
}

function getCount369(numberCollection) {
  return numberCollection.filter(num => ['3','6','9'].includes(num)).length;
}

module.exports = problem3;
