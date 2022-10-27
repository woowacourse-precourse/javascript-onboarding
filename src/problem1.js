function problem1(pobi, crong) {
  console.log("기본값",pobi, crong)
  const N = 2;
  let pobiplus = 0
  let pobimultiply = 1
  let crongplus = 0
  let crongmultiply = 1

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
  for ( i = 0 ; i < pobinums.length ; i ++) {
    for ( j = 0 ; j <pobinums[i].length; j++){
      pobiplus = pobiplus  + pobinums[i][j]
      pobimultiply = pobimultiply * pobinums[i][j]
    }
  }
  
  for ( i = 0 ; i < crongnums.length ; i ++) {
    for ( j = 0 ; j <pobinums[i].length; j++){
      crongplus = crongplus  + crongnums[i][j]
      crongmultiply = crongmultiply * crongnums[i][j]
    }
  }
  console.log("중간확인",pobinums[0][1]);
  console.log("포비확인",pobinums)
  console.log("크로확인",crongnums)
  console.log("포비 더하기",pobiplus)
  console.log("크롱 더하기",crongplus)
  console.log("포비 곱하기",pobimultiply)
  console.log("크롱 곱하기",crongmultiply)
}





module.exports = problem1;
