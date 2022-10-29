function problem1(pobi, crong) {
  var answer;
  function checker(...num){
    function slicer(num){
      let r = 0;
      let r2 = 1;
      for(let i = 0; i < num.length; i++){
        let slicedNum = Number(num.slice(i,i+1));
        r += slicedNum;
        r2 *= slicedNum;
      };
      score.push(r,r2);
    };

    const score = [];
    let index = 0;
  
    slicer(String(num[index]));
    index++;
    slicer(String(num[index]));

    const finalScore = Math.max(...score);

    return finalScore
  }; 

  const pobiScore = checker(pobi[0],pobi[1]);
  const crongScore = checker(crong[0],crong[1]);

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else answer = 0;

  return answer;
}


module.exports = problem1;
