function problem3(number) {
  let clap = 0; //clap count
  let stringNumber = ''; 
  for (let j=1; j<number+1; j++){
    stringNumber = String(j); // number to string
    for(let i=0; i<stringNumber.length;i++) { // repeat len stringnumber
      if(stringNumber[i] === '3' || stringNumber[i]==='6' || stringNumber[i]==='9') clap++;
    }
  }
  var answer;
  answer = clap;
  return answer;
}

module.exports = problem3;
