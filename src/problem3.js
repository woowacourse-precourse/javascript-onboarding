function problem3(number) {
  const numberList = Array(number).fill().map((v,i)=>i+1); 
  numberList.map((num, idx)=> {
    numberList[idx] = String(num).replace(/[3,6,9]/g,"*").replace(/[0-9]/g,"");
  })
  const answer = (numberList.join('')).length;
  return answer;
}

module.exports = problem3;