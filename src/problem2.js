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

  let copyString = input;

  while (true) {
    const stack = [];
    let [startIdx, endIdx] = [0, copyString.length - 1];

    while (startIdx <= endIdx) {
      if (startIdx === endIdx) {
        stack.push(copyString[startIdx]);
        break;
      }

      if(copyString[startIdx] !== copyString[startIdx+1]){
        stack.push(copyString[startIdx]);
        startIdx++;
      }
      else{
        const cur = copyString[startIdx];
        let curIdx = startIdx+1;
        while(cur === copyString[curIdx]){
          curIdx++;
        }
        startIdx = curIdx;
      }
    }
    
    const temp = stack.join('');
    if(temp === copyString) break;
    copyString = temp;
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

