function problem2(cryptogram) {
  try{
    if(checkInputErr(cryptogram)){
      throw new Error("Invalid Input Error");
    }

    
  }catch(err){
    console.log(err);
  }
}

function checkInputErr(cryptogram){
  const vaildType = (input) => typeof input === 'string';
  const validLength = (input) => 1 <= input.length && input.length <=1000;
  const validInput = (input) => [...input].every(char => char === char.toLowerCase()); 

  if(!vaildType(cryptogram)) return true;
  else if(!validLength(cryptogram)) return true;
  else if(!validInput(cryptogram)) return true;
  else return false;
}

function deleteSame(input){
 
}

console.log(deleteSame("browoanoommnaon"));


module.exports = problem2;
