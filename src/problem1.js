//요구사항
//1~400page의 책에서 임의로 책을 펼친다.
//왼/오page 번호를 얻는다.
//왼/오의 숫자를 순서대로 배열에 넣는다. ------> (ok)
//배열 안의 숫자를 더하거나 곱해 가장 큰 정수를 만든다.
//포비와 크롱의 각각의 가장 큰 정수를 비교한다.
//더 큰 정수를 갖고 있는 사람이 승자이다.
//포비가 이기면 1, 크롱이 이기면 2, 무승부면 0, 예외사항은 -1을 리턴한다.
//answer를 리턴하도록 solution 메소드를 만든다.

function problem1(pobi, crong) {
  //var answer;

  var pobi = []; //포비의 배열
  var crong = []; //크롱의 배열

  var l = 0; //왼쪽page
  var r = 0; //오른쪽page

  const randomNum1 = Math.floor(Math.random()*400 + 1); //포비가 펼친 책page
  const randomNum2 = Math.floor(Math.random()*400 + 1); //크롱이 펼친 책page

  //포비
  if(randomNum1 % 2 === 0){ //랜덤숫자가 짝수일때
    r = randomNum1;
    l = r-1;
    pobi.push(l);
    pobi.push(r);    
  }    
   else {  //랜덤숫자가 홀수일때
    l = randomNum1;
    r = l+1;
    pobi.push(l);
    pobi.push(r);
  }
  
  //크롱
  if(randomNum2 % 2 === 0){ //랜덤숫자가 짝수일때
    r = randomNum2;
    l = r-1;
    crong.push(l);
    crong.push(r);
  } else {  //랜덤숫자가 홀수일때
    l = randomNum2;
    r = l+1;
    crong.push(l);
    crong.push(r);
  }

  //return answer;
}

function solution(){ //리턴하는 메소드 solution

  var arr = [];
  const toNumbers = arr => arr.map(Number);
  var lodash = require('lodash');
  var sum = lodash.sum(arr);
  var a = 0; //덧셈이 더 큰 정수
  var b = 1; //곱셈이 더 큰 정수

  r = r.toString(); //오른쪽page숫자를 문자열로 변환    
  arr = r.split(""); //자리수대로 쪼개기  
  toNumbers(arr); //문자열을 숫자로 변환  

  for(let i=0; i<arr.length; i++){
    if(arr[i] == "1" || arr[i] == "0"){ //0,1이 있다면, 덧셈이 더 큰 정수
      a = sum;
      break;
    }
    else {
      b = b*arr[i];//아니라면, 곱셈이 더 큰 정수
      break;
    }    
  }

  if(a===0){

  }
  
}

problem1();

//module.exports = problem1;
