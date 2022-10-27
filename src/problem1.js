function problem1(pobi, crong) {
  console.log("기본값",pobi, crong)
  const N = 2;
  let pobinums = []
  let crongnums = []
  for (i = 0 ; i < N ; i++) {
    let _pobinums = [];
    do {
      _pobinums.push(pobi[i] % 10);  
      pobi[i] = Math.floor(pobi[i] / 10);  
    } while (pobi[i] > 0);
    console.log("포비분해",_pobinums)
    pobinums.push(_pobinums)

    let _crongnums = [];
    do {
      _crongnums.push(crong[i] % 10);  
      crong[i] = Math.floor(crong[i] / 10);  
    } while (crong[i] > 0);
    console.log("크롱분해",_crongnums)
    crongnums.push(_crongnums)
  }
  console.log("포비확인",pobinums)
  console.log("크로확인",crongnums)
}




module.exports = problem1;
