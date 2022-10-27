function problem1(pobi, crong) {
  console.log("기본값",pobi, crong)
  const N = 2;
  let pobiplus_1 = 0
  let pobiplus_2 = 0
  let pobimultiply_1 = 1
  let pobimultiply_2 = 1
  let crongplus_1 = 0
  let crongplus_2 = 0
  let crongmultiply_1 = 1
  let crongmultiply_2 = 1

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
    pobiplus_1 = pobiplus_1 + pobinums[0][i]
    pobiplus_2 = pobiplus_2 + pobinums[1][i]
    pobimultiply_1 = pobimultiply_1 * pobinums[0][i]
    pobimultiply_2 = pobimultiply_2 * pobinums[1][i]
  }
  
  for ( i = 0 ; i < crongnums.length ; i ++) {
    crongplus_1 = crongplus_1 + crongnums[0][i]
    crongplus_2 = crongplus_2 + crongnums[1][i]
    crongmultiply_1 = crongmultiply_1 * crongnums[0][i]
    crongmultiply_2 = crongmultiply_2 * crongnums[1][i]
  
  }

  if (pobiplus_1 < pobiplus_2){
    pobiplus = pobiplus_2
  } else if (pobiplus_1 > pobiplus_2) {
    pobiplus = pobiplus_1
  } else if (pobiplus_1 == pobiplus_2) { 
    pobiplus = pobiplus_1
  }

  if (pobimultiply_1 < pobimultiply_2){
    pobimultiply = pobimultiply_2
  } else if (pobimultiply_1 > pobimultiply_2) {
    pobimultiply = pobimultiply_1
  } else if (pobimultiply_1 == pobimultiply_2) { 
    pobimultiply = pobimultiply_1
  }

  if (crongplus_1 < crongplus_2){
    crongplus = crongplus_2
  } else if (crongplus_1 > crongplus_2) {
    crongplus = crongplus_1
  } else if (crongplus_1 == crongplus_2) { 
    crongplus = crongplus_1
  }

  if (crongmultiply_1 < crongmultiply_2){
    crongmultiply = crongmultiply_2
  } else if (pcrongmultiply_1 > crongmultiply_2) {
    crongmultiply = crongmultiply_1
  } else if (crongmultiply_1 == crongmultiply_2) { 
    crongmultiply = crongmultiply_1
  }

  if (pobiplus < pobimultiply) {
    pobione = pobimultiply
  } else if (pobiplus > pobimultiply) {
    pobione = pobiplus
  } else if (pobiplus == pobimultiply) {
    pobione = pobiplus
  }

  if (crongplus < crongmultiply) {
    crongone = crongmultiply
  } else if (crongplus > crongmultiply) {
    crongone = pobiplus
  } else if (crongplus == crongmultiply) {
    crongone = crongplus
  }


  console.log("중간확인",pobinums[1][0]);
  console.log("포비확인",pobinums)
  console.log("크로확인",crongnums)
  console.log("포비 더하기_1",pobiplus_1)
  console.log("포비 더하기_2",pobiplus_2)
  console.log("크롱 더하기_1",crongplus_1)
  console.log("크롱 더하기_2",crongplus_2)
  console.log("포비 곱하기_1",pobimultiply_1)
  console.log("포비 곱하기_2",pobimultiply_2)
  console.log("크롱 곱하기_1",crongmultiply_1)
  console.log("크롱 곱하기_2",crongmultiply_2)
  console.log("포비더하기비교",pobiplus)
  console.log("포비곱하기비교",pobimultiply)
  console.log("크롱더하기비교",crongplus)  
  console.log("크롱곱하기비교",crongmultiply)
  console.log("포비 더하기/곱하기",pobione)
  console.log("크롱 더하기/곱하기",crongone)
}






module.exports = problem1;
