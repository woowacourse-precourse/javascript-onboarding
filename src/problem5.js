function problem5(money) {
  //오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
  const moneybox = [0,0,0,0,0,0,0,0,0];
  const A = 50000, B = 10000, C = 5000, D = 1000, E = 500, F = 100, G = 50, H = 10;
  while(money!=0){
    if(Math.floor(money/A)>0){
      moneybox[0]+=1;
      money-=A;
    }
    else if(Math.floor(money/B)>0){
      moneybox[1]+=1;
      money-=B;
    }
    else if(Math.floor(money/C)>0){
      moneybox[2]+=1;
      money-=C;
    }
    else if(Math.floor(money/D)>0){
      moneybox[3]+=1;
      money-=D;
    }
    else if(Math.floor(money/E)>0){
      moneybox[4]+=1;
      money-=E;
    }
    else if(Math.floor(money/F)>0){
      moneybox[5]+=1;
      money-=F;
    }
    else if(Math.floor(money/G)>0){
      moneybox[6]+=1;
      money-=G;
    }
    else if(Math.floor(money/H)>0){
      moneybox[7]+=1;
      money-=H;
    }
    else{
      moneybox[8]=money
      money-=money;
    }
  }
  return moneybox;
}

module.exports = problem5;
