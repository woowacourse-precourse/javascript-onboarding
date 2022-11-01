function problem3(number) {


  numList= Array.prototype.slice.call(String(number));
  //console.log(numList.at(-1),numList[0],numList.length);

  //첫번째 자릿수, 마지막 자릿수, 숫자의 길이 저장해주기
  //const lastDigit = Number(numList.at(-1));
  const firstDigit=Number(numList[0]);
  const iterationNumer= Number(numList.length);
  let totalCount=[]

  //숫자가 10보다 작은 경우
  if (number<10)
      return less10(number);

  //숫자가 10보다 큰 경우
  for (let i=0; i<iterationNumer; i++){

      if (i==0)
      {
          totalCount.push(3); 
          continue; 
      }

      if (i==(iterationNumer-1))
      {
          //첫째자리 수보다 1을 뺀 수까지 횟수 계산해주기 
          temp =totalCount.at(-1)*(firstDigit-1)
          if (temp)
              totalCount.push(temp)

          smallNumber=number%(10**(i));
          temp2= problem3(smallNumber);

          if (!(firstDigit%3))
              temp2= temp2 +(parseInt(firstDigit/3)-1)*(10**i) + (smallNumber + 1)
          totalCount.push(temp2)
      }

      else{
          prevCount=totalCount.at(-1)
          temp= prevCount * 9 + 3*(10**(i))
          totalCount.push(temp)
      }
  }

  let sum=0
  totalCount.forEach(element => {
      sum+=element
  });

  
  return sum
}

function less10(number){
  if (number<3) return 0;
  if (number<6) return 1;
  if (number<9) return 2;
  if (number<10) return 3;

}

module.exports = problem3;
