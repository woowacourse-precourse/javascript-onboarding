const pobi = [97,98];
const crong = [197,198];



function score(userName){
  let scoreList =[];
  let leftsum = 0;
  let rightsum = 0;
  let leftmultiple = 1;
  let rightmultiple = 1;
  

  const strNum = userName.map(v=>String(v));
  const leftpageNums = strNum[0].split(''); //9,7
  const rightpageNums = strNum[1].split(''); // 9,8

  for(let i =0;i<leftpageNums.length;i++){
    leftsum += parseInt(leftpageNums[i]);
    rightsum += parseInt(rightpageNums[i]);
    leftmultiple *= parseInt(leftpageNums[i]);
    rightmultiple *= parseInt(rightpageNums[i]);
  }

  scoreList.push(leftsum);
  scoreList.push(rightsum);
  scoreList.push(leftmultiple);
  scoreList.push(rightmultiple);
  
  return Math.max(...scoreList)
}





function problem1(pobi, crong) {

}

module.exports = problem1;
