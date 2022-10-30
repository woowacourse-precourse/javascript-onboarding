function problem6(forms) {
  var answer;
  return answer;
}

function getAdjacentStrings(string) {
  const adjacentStrings = [];

  for (let i = 0; i < string.length - 1; i += 1) {
    const adjacentString = string.slice(i, i + 2);
    adjacentStrings.push(adjacentString);
  }

  return adjacentStrings;
}

module.exports = problem6;
