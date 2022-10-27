function problem3(number) {
  if (number < 1 || number > 10000){
    return "number의 범위를 확인해주세요";
  }
  const numberList = Array(number).fill().map((v,i)=>i+1); 
  numberList.map((num, idx)=> {
    numberList[idx] = String(num).replace(/[3,6,9]/g,"*").replace(/[0-9]/g,"");
  })
  const answer = (numberList.join('')).length;
  return answer;
}

module.exports = problem3;