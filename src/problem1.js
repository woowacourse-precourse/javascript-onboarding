function problem1(pobi, crong) {
  var answer;
  answer= solution(pobi, crong);
  return answer;
}

module.exports = problem1;

function notValidList(l){
  if (l.length!=2){ return true;}
  if (l[0]%2==0 || l[1]%2!=0){return true;}
  if (l[1]!=l[0]+1){return true;}
  if(l[0]<2 || l[0]>399 || l[1]<2 || l[1]>399){return true;}
  return false;
}

function calcul(num){
  let nAdd = 0;
  let nMul = 1;
  for (let n of String(num)){
      nAdd +=Number(n);
      nMul *=Number(n);
  }

  return Math.max(nAdd, nMul);
}

function solution(pobi, crong){
  // 유효한 리스트인지 확인, True가 리턴되면 return -1
  if (notValidList(pobi)){return -1;}
  if (notValidList(crong)){return -1;}
  
  // 각 자리 수 더하거나 곱해서 가장 큰 수
  pobiMax = Math.max(calcul(pobi[0]), calcul(pobi[1]))
  crongMax = Math.max(calcul(crong[0]), calcul(crong[1]))

  if (pobiMax>crongMax) return 1;
  else if(pobiMax<crongMax) return 2;
  else if (pobiMax==crongMax) return 0;
}