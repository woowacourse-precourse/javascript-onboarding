function problem3(number) {
  let answer = 0;

  try{
    if(checkInputErr(number)){
      throw new Error("Invalid input Error");
    }

  for(let i=1; i<=number; i++){
    const cur = [...i.toString()].map(Number);
    answer += findNumberSet(cur).reduce((acc,cur)=> acc+=cur,0);
  }

  return answer;
  }catch(err){
    console.log(err.message);
  }
}

function checkInputErr(number) {
  const validType = (input) => typeof input === 'number'; //TypeError
  const validRange = (input) => 1 <= input && input <= 10000; // RangeError

  if (!validType(number)) return true;
  else if (!validRange(number)) return true;
  else return false;
}


function findNumberSet(inputArray){
  const filterNum = (numArray) =>{
    const temp=[];
    numArray.forEach(inputNum =>{
      const count = inputArray.filter(cur => cur === inputNum).length;
      temp.push(count);
    })
    return temp;
  }
  
  return filterNum([3,6,9]);
}

module.exports = problem3;

function test(){
  console.log(problem3(13)); //4
  console.log(problem3(33)); //14
  console.log(problem3("string")); // TypeError 
  console.log(problem3(20000)); // RangeError
}

