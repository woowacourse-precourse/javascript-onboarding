//let input = require('fs').readFileSync('index.txt').toString().split('\n');


function problem1(pobi, crong) {

  let answer = 0;
  let pobiMax = 0;
  let crongMax = 0;
  if ((pobi[0] + 1 != pobi[1]) || (crong[0] + 1 != crong[1])) {
    answer = -1;
  }
  else {
    for (let Test = 0; Test < 2; Test++) {
      let pobiStr = pobi[Test].toString();
      let crongStr = crong[Test].toString();
      let multi = 1;
      let plusi = 0;
      for (let i = 0; i < pobiStr.length; i++) {
        plusi += Number(pobiStr[i]);
        multi *= Number(pobiStr[i]);
      }
    //  console.log("pobi : " + plusi + " " + multi);
      pobiMax = Math.max(pobiMax, multi);
      pobiMax = Math.max(pobiMax, plusi);

      multi = 1;
      plusi = 0;
      for (let i = 0; i < crongStr.length; i++) {
        plusi += Number(crongStr[i]);
        multi *= Number(crongStr[i]);
      }
    //  console.log("crong : " + plusi + " " + multi);
      crongMax = Math.max(crongMax, multi);
      crongMax = Math.max(crongMax, plusi);

     // console.log("max 비교 : " + pobiMax + " " + crongMax);
    }
    if(pobiMax > crongMax){
      answer = 1;
    }
    else if(pobiMax < crongMax){
      answer = -1;
    }
    else{
      answer=0;
    }
  }
  return answer;
}

module.exports = problem1;



/*function problem1(pobi, crong) {
  var answer;
  console.log(pobi);
  
  console.log(crong);
  return answer;
}
module.exports = problem1;*/