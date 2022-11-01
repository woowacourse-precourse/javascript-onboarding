function problem4(word) {

  try {
    if (checkInputErr(word)) {
      throw new Error("Invalid Input Error");
    }

    const dict = new Map();
    makeDictionary(dict);
    const answer = handleString(word, dict);

    return answer;

  } catch (err) {
    console.log(err.message);
  }
}

function checkInputErr(word) {

  const validType = (input) => typeof input === 'string'; //TypeError
  const validLength = (input) => 1 <= input.length && input.length <= 1000; // LengthError

  if (!validType(word)) return true;
  else if (!validLength(word)) return true;
  else return false;
}

function makeDictionary(dict) {
  const alpha = new Array(26).fill(null).map((_, i) => String.fromCharCode(i + 65)); // A-Z 배열만들기
  const reverseAlpha = [...alpha].reverse(); // Z-A 배열 만들기
  for (let i = 0; i < alpha.length; i++) {
    const [key, value] = [alpha[i], reverseAlpha[i]];
    dict.set(key, value);
    dict.set(key.toLowerCase(), value.toLowerCase());
  }
}//사전만들기

function handleString(word, dict) {
  const temp = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!dict.has(char)) {
      temp.push(char);
    }
    else {
      temp.push(dict.get(char));
    }
  }

  return temp.join('');
}

module.exports = problem4;

function test() {
  console.log(problem4("I love you")); // "R olev blf"
  console.log(problem4("R olev blf")); //"I love you"
  console.log(problem4("Aa 123 &^%& bCC ++")); // Zz 123 &^%& yXX ++
  console.log(problem4(123)) // Type Error
  console.log(problem4('')) //Length Error
}


