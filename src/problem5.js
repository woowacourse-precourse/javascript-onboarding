function problem5(money) {
  try{
    if (checkInputErr(money)) {
      throw new Error("Invalid Input Error");
    }
    const answer = calUnits(money);
    return answer;
  }catch(err){
    console.log(err.message);
  }
}

function checkInputErr(number) {

  const validType = (input) => typeof input === 'number'; //TypeError
  const validRange = (input) => 1 <= input && input <= 1000000; // RangeError

  if (!validType(number)) return true;
  else if (!validRange(number)) return true;
  else return false;
}


function calUnits(money) {
  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  let totalLeft = money;

  moneyUnits.forEach(unit => {
    const share = Math.floor(totalLeft / unit);
    answer.push(share);
    totalLeft -= share * unit;
  })

  return [...answer];
}



module.exports = problem5;
