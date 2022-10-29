function problem2(cryptogram) {
  try {
    if (checkInputErr(cryptogram)) {
      throw new Error("Invalid Input Error");
    }

    const answer = deleteSame(cryptogram);
    return answer;

  } catch (err) {
    console.log(err.message);
  }
}

function checkInputErr(cryptogram) {
  const validType = (input) => typeof input === 'string'; //TypeError
  const validLength = (input) => 1 <= input.length && input.length <= 1000; // LengthError
  const validInput = (input) => [...input].every(char => char === char.toLowerCase()); // InputError

  if (!validType(cryptogram)) return true;
  else if (!validLength(cryptogram)) return true;
  else if (!validInput(cryptogram)) return true;
  else return false;
}

function deleteSame(input) {
  const map = new Map();
  let copyString = input;

  while (true) {
    for (let i = 0; i < copyString.length - 1; i++) {
      const [cur, next] = [copyString[i], copyString[i + 1]];
      if (cur === next) {
        map.set(cur, 1);
      }
    }//중복되는 문자가 있으면 map에 set함.
    const keyArr = [...map.keys()];
    if (keyArr.length === 0) break; //중복문자가 없다면 break
    const repeatChar = keyArr.join('|'); // "a|b" 형식으로 중복문자들을 만듬.
    const regex = new RegExp(`(${repeatChar}){2,}`, 'g'); // 정규표현식 생성
    copyString = copyString.replace(regex, ""); // 2개이상 중복된문자들 공백으로 치환.
    console.log(copyString);
    map.clear(); //map초기화 ㅠ
  }

  return copyString;
}

module.exports = problem2;


function test() {
  console.log(problem2("browoanoommnaon")); //brown
  console.log(problem2("zyelleyz"));  // ""
  console.log(problem2("afvsdfsaaasfds")); // afv
  console.log(problem2("FDASFSDssdsa")) // Input Error
  console.log(problem2(123)) // Type Error
  console.log(problem2()) //Length Error
  console.log(problem2('saddaas')) // 'sas'
}

test();