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

  const vaildType = (input) => typeof input === 'string'; //TypeError
  const validLength = (input) => 1 <= input.length && input.length <= 1000; // LengthError

  if (!vaildType(word)) return true;
  else if (!validLength(word)) return true;
  else return false;
}

function makeDictionary(dict) {
  const alpha = new Array(26).fill(null).map((_, i) => String.fromCharCode(i + 65));
  const reverseAlpha = [...alpha].reverse();
  for (let i = 0; i < alpha.length; i++) {
    const [key, value] = [alpha[i], reverseAlpha[i]];
    dict.set(key, value);
    dict.set(key.toLowerCase(), value.toLowerCase());
  }
}

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
