function problem3(number) {
  let answer = 0;

  for(let i=1; i<=number; i++){
    const cur = [...i.toString()].map(Number);
    answer += findNumberSet(cur).reduce((acc,cur)=> acc+=cur,0);
  }

  return answer;
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


