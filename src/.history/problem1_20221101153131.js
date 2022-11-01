function is_error(pobi, crong)
{
  if (pobi.length != 2 || pobi & 1 === 0 || pobi & 2)
    return true;
  if (pobi[1] > 400 || pobi[0] < 0 || pobi[1] != pobi[0] + 1)
    return true;
  if (crong.length != 2 || crong & 1 === 0 || crong & 2)
    return true;
  if (crong[1] > 400 || crong[0] < 0 || crong[1] != crong[0] + 1)
    return true;
  return false;
}

function calc(charcter){
  let ans = 0;
  for (let i = 0; i < 2 ; i++) {
    let sum = 0;
    let mux = 1;
    let n = charcter[i].toString();
    for(let j = 0; j < n.length ; j++){
      sum += parseInt(n[j]);
      mux *= parseInt(n[j]);
    }
    ans = Math.max(ans, sum, mux);
  }
  return ans;
}

function problem1(pobi, crong) {
  if(is_error(pobi, crong))
    return -1;
  pobi = calc(pobi);
  crong = calc(crong);
  if(pobi > crong)
	return 1;
 if(pobi < crong)
	return 2;
  return 0;
}

module.exports = problem1;
