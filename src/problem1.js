function problem1(pobi, crong) {
  let pobi_max=0;
  let crong_max=0;
  let multi=1;
  let total=0;
  
  if(pobi[0]+1 != pobi[1])
  return -1

  if(crong[0]+1 != crong[1])
  return -1

  for(let pobiNumber of pobi){
    while(pobiNumber>0){
      multi=multi*(pobiNumber%10)
      pobiNumber=Math.floor(pobiNumber/10)
    }
    if(pobi_max<multi)
    pobi_max=multi
    multi=1;
  }
  
  for(let pobiNumber2 of pobi){
    while(pobiNumber2>0){
     total=total+(pobiNumber2%10)
      pobiNumber2=Math.floor(pobiNumber2/10)
    }
    if(pobi_max<total)
    pobi_max=total
    total=0
  }
  console.log(pobi_max)
  
  for(let crongNumber of crong){
    while(crongNumber>0){
      multi=multi*(crongNumber%10)
      crongNumber=Math.floor(crongNumber/10)
    }
    if(crong_max<multi)
    crong_max=multi
    multi=1;
  }

  for(let crongNumber2 of crong){
    while(crongNumber2>0){
    total=total+(crongNumber2%10)
    crongNumber2=Math.floor(crongNumber2/10)
    }
    if(crong_max<total)
    crong_max=total
    total=0
  }
  console.log(crong_max)

  if(pobi_max>crong_max){
  return 1
  }

  else if(pobi_max<crong_max){
  return 2
  }

  else if(pobi_max===crong_max){
  return 0
  }

  else{
  return -1
  }

}

module.exports = problem1;
const pobi=[159,160]
const crong=[159,160]
const answer = problem1(pobi,crong)
console.log(answer)


