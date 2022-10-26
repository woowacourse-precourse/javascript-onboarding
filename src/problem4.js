function problem4(word) {
  const wordArray = word.split("");
  console.log(wordArray);

  let frogMap = new Map();
  const ALPHABET_LENGTH = 26;

  for (let i = 0; i < ALPHABET_LENGTH; i++) {
    const key = String.fromCharCode("A".charCodeAt() + i);
    const value = String.fromCharCode("Z".charCodeAt() - i);
    frogMap.set(key, value);
  }
  console.log(frogMap);

  let answer = "";
  wordArray.forEach((value) => {
    if (value === " ") answer += " ";
    else if (value.charCodeAt() > 90)
      answer += frogMap.get(value.toUpperCase()).toLowerCase();
    else answer += frogMap.get(value);
  });
  console.log(answer);
  return answer;
}

problem4("I love you");

module.exports = problem4;

/* 
  describe("problem4", () => {
    test("case1", () => {
      expect(problem4("I love you")).toEqual("R olev blf");
    });
  });
*/
