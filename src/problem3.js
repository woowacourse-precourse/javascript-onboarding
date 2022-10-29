function problem3(number) {
  var answer;
  return answer;
}

function findNumberSet(inputArray){
  const filterNum = (numArray) =>{
    const temp=[];
    numArray.forEach(inputNum){
      const count = inputArray.filter(cur => cur === inputNum).length;
      temp.push(count);
    }
    return temp;
  }
  
  return filterNum([3,6,9]);
}

module.exports = problem3;
