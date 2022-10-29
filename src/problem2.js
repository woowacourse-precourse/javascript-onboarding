function problem2(cryptogram) {
  try {
    if (checkInputErr(cryptogram)) {
      throw new Error("Invalid Input Error");
    }

    const answer = deleteSame(cryptogram);
    return answer;

  } catch (err) {
    console.log(err);
  }
}

function checkInputErr(cryptogram) {
  const vaildType = (input) => typeof input === 'string';
  const validLength = (input) => 1 <= input.length && input.length <= 1000;
  const validInput = (input) => [...input].every(char => char === char.toLowerCase());

  if (!vaildType(cryptogram)) return true;
  else if (!validLength(cryptogram)) return true;
  else if (!validInput(cryptogram)) return true;
  else return false;
}

function deleteSame(input) {
  const map = new Map();
  let copyString = input;

  while (true) {
    for (let i = 0; i < copyString.length-1; i++) {
      const [cur, next] = [copyString[i], copyString[i + 1]];
      if (cur === next) {
        map.set(cur, 1);
      }
    }
      const keyArr = [...map.keys()];
      if(keyArr.length ===0) break;
      const repeatChar = keyArr.join('|');
      const regex = new RegExp(`(${repeatChar}){2,}`, 'g');
      copyString = copyString.replace(regex, "");
      map.clear();
    }

    return copyString;
  }

  module.exports = problem2;
