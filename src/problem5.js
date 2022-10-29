function problem5(money) {
  if(!checkInputValid(money)) {
    return 'error';
  }

  // return true;
  
}

function checkInputValid(money) {
  if(money < 1 || money > 1000000) return false;
  return true;
}

module.exports = problem5;
