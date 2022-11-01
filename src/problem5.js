function problem5(money) {

  CoinList=Coin(money)

  return printCoin(money,CoinList);
}

function Coin(money){

  // N[k] : k 원에서 필요한 최소 동전의 갯수
  // P[k] : k 원에서 추가한 동전 값
  let N=[0]
  let P=[0]
  for (let i=1;i<=money;i++){
      M=N[i-1]
      C=1
      if (i>=10) {
          if (M>N[i-10]){
              M=N[i-10]
              C=10
          }
      }
      if (i>=50) {
          if (M>N[i-50]){
              M=N[i-50]
              C=50
          }
      }
      if (i>=100) {
          if (M>N[i-100]){
              M=N[i-100]
              C=100
          }
      }
      if (i>=500) {
          if (M>N[i-500]){
              M=N[i-500]
              C=500
          }
      }
      if (i>=1000) {
          if (M>N[i-1000]){
              M=N[i-1000]
              C=1000
          }
      }
      if (i>=5000) {
          if (M>N[i-5000]){
              M=N[i-5000]
              C=5000
          }
      }
      if (i>=10000) {
          if (M>N[i-10000]){
              M=N[i-10000]
              C=10000
          }
      }
      if (i>=50000) {
          if (M>N[i-50000]){
              M=N[i-50000]
              C=50000
          }
      }
      N[i]=M+1
      P[i]=C
  }
  return P
}


function printCoin(money,P){
  
  
  let C1=C10=C50=C100=C500=C1000=C5000=C10000=C50000=0

  for (k=money;k>0;k-=P[k])
  {
      if (P[k]==1) C1++
      else if (P[k]==10) C10++
      else if (P[k]==50) C50++
      else if (P[k]==100) C100++
      else if (P[k]==500) C500++
      else if (P[k]==1000) C1000++
      else if (P[k]==5000) C5000++
      else if (P[k]==10000) C10000++
      else if  (P[k]==50000) C50000++;
  }

  let Coins=[C50000,C10000,C5000,C1000,C500,C100,C50,C10,C1]
  return Coins
  // console.log(C1,C10,C50,C100,C500,C1000,C5000,C10000,C50000)

}



module.exports = problem5;


