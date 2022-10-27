function problem1(pobi, crong) {
  var answer;
  var maxpobi;
  var maxcrong;
  

  if (pobi[0]+1 != pobi[1] || pobi[0]%2==0 || pobi[1]%2!=0 || pobi[0]<1 || pobi[1]>400){
    return -1;
  }
  if (crong[0]+1 != crong[1] || crong[0]%2==0 || crong[1]%2!=0 || crong[0]<1 || crong[1]>400){
    return -1;
  }

  maxpobi = calcMax(pobi);
  maxcrong = calcMax(crong);

  if (maxpobi == maxcrong){
    answer = 0;
  }
  else if (maxpobi > maxcrong){
    answer = 1;
  }
  else{
    answer = 2;
  }

  return answer;
}

function calcMax(pobi, crong) {
  const mapfn = (arg) => Number(arg);
  var left = String(pobi[0]).split("").map(mapfn);
  console.log("앞" + left);
  var maxleft = checkMax(left);
  
  var right = String(pobi[1]).split("").map(mapfn);
  console.log("뒤" + right);
  var maxright = checkMax(right);

  return (maxleft>maxright ? maxleft : maxright);
}

function checkMax(arr){
  console.log("배열" + arr);

  var max = 0;
  var temp = 1;

  for (addnum of arr){
    max += addnum;
  }

  for (mulnum of arr){
    temp *= mulnum;
  }

  return (max>temp ? max : temp);
}

module.exports = problem1;
