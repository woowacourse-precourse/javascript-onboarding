function problem5(money){
  var answer = [];
  const arr = [50000,10000,5000,1000,500,100,50,10,1];
  let count = 0;

  for (let i=0; i<arr.length; i++){
      count = parseInt(money / arr[i])

      if (count > 0 ) {
          money -= count*arr[i]
      }

      answer.push(count)
  }

return answer
  
}


module.exports = problem5;
