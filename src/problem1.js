//각 자리 수를 더하는 함수
function plus(num){
 var num_arr=num.toString().split('').map(x=>parseInt(x));
 return num_arr.reduce((acc,cur)=>acc+cur);
};


//각 자리 수를 곱하는 함수
function multiply(num){
  var num_arr=num.toString().split('').map(x=>parseInt(x));
  return num_arr.reduce((acc,cur)=>acc*cur);
};


function problem1(pobi, crong) {
  var answer;
  var pobi_array = [];
  var crong_array = [];
  var pobi_max;
  var crong_max;
  //pobi의 합, 곱을 모두 array에 저장 후 최대값 추출
  for (var i=0; i<pobi.length; i++){
    pobi_array.push(plus(pobi[i]));
    pobi_array.push(multiply(pobi[i]));
  }
  pobi_max = Math.max(pobi_array);

  //crong의 합, 곱을 모두 array에 저장 후 최대값 추출
  for (var i=0; i<crong.length; i++){
    pobi_array.push(plus(crong[i]));
    pobi_array.push(multiply(crong[i]));
  }
  crong_max = Math.max(crong_array);
  //값 비교 후 answer 할당
  if(pobi_max>crong_max){
    answer = 1;
  } else if(pobi_max<crong_max){
    answer = 2;
  } else{
    answer = 0;
  }
  console.log(answer);
}

module.exports = problem1;