function get_sum(n){
  let s = 0;
  do{
      s+=n%10;
      n=Math.floor(n/10);
  }while(n>0);
  return s;
}

function get_mul(n){
  let m=1;
  do{
      m*=n%10;
      n=Math.floor(n/10);
  }while(n>0);
  return m;
}

function check_page(page){
  if(page[1]-page[0] != 1){return -1};
}

function problem1(pobi, crong) {
  var answer;
  if (check_page(pobi)==-1 || check_page(crong)==-1){
      answer = -1;
      return answer;
  }
  let max1=-1;
  let max2=-1;
  for(i=0;i<2;i++){
      let n=pobi[i];
      let sum = 0;
      let mul = 0;
      sum = get_sum(pobi[i]);
      max1 = max1 < sum ? sum : max1;
      mul = get_mul(pobi[i]);
      max1 = max1 < mul ? mul : max1;
      n=crong[i];
      sum = get_sum(crong[i]);
      max2 = max2 < sum ? sum : max2;
      mul = get_mul(crong[i]);
      max2 = max2 < mul ? mul : max2;
  }
  if(max1>max2){
      answer = 1;
  }
  else if (max1<max2){
      answer = 2;
  }
  else if (max1==max2){
      answer = 0;
  }
  else{
      answer = -1;
  }
  return answer;
}

module.exports = problem1;