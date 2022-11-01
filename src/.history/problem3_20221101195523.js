function problem3(number) {
  var answer = 0;
  for(let i = 3 ; i <= number;i++){
  	let tmp = i;
    while(tmp > 0){
    	let mod = tmp % 10;
		if(mod === 3 || mod === 6 || mod === 9){
			answer++;
		}
		tmp=parseInt(tmp/10);
    }
  }
  return answer;
}

module.exports = problem3;
