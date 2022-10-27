function problem2(cryptogram) {
  const value = cryptogram.toString().split("");
  for(let i=0; i<value.length; i++){
    for(let j=0; j<value.length; j++){
      if(value[j] == value[j+1]) {
        value.splice(j, 2);
        j--;
  }
}
}
  let answer = value.toString()
  let replaced_answer = answer.replace(/,/g, '');
      return replaced_answer;
 
}


module.exports = problem2;
