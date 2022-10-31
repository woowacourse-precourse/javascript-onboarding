function problem1(pobi, crong) {
  if (pobi[1] == pobi[0] + 1 && crong[1] == crong[0] + 1) {
    const pobiValue = oddVsEven(pobi);
    const crongValue = oddVsEven(crong);
    // 1. last method that check who has bigger number.
    if (pobiValue == crongValue) {
      return 0;
    } else if(pobiValue > crongValue){
      return 1;
    } else{
      return 2;
    }
  }
  return -1;
}

// 2. second checking method that check whether odd page has bigger or not.
function oddVsEven(arr) {
  const odd = plusVsTimes(arr[0])
  const even = plusVsTimes(arr[1])
  return odd > even ? odd : even
}

// 3. first checking method to compare the value of sum and times.
function plusVsTimes(page){
  const numbers = page.toString();
  let i = 0;
  let number;
  let sum = 0;
  let times = 1;
  while(i < numbers.length){
    number = Number(numbers[i]);
    sum += number;
    times *= number;
    i++;
  }
  return sum > times ? sum : times;
}

module.exports = problem1;
