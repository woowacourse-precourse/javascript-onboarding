function problem1(pobi, crong) {
  var answer;
  //랜덤 부분
  // const PNum = [];
  // for (let i = 0 ; i < 4 ; i++){
  //   PNum.push(Math.floor(Math.random()*(400-1)*1));
  // }
  // console.log(pobi[1].slice())

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

  }; 


  const pobiScore = checker(pobi[0],pobi[1]);
  const crongScore = checker(crong[0],crong[1]);


  return answer;
}
// problem1([333,222],[312,111]);

module.exports = problem1;
