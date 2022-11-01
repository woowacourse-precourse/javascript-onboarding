function problem3(number) {
  let result = 0;
  for(let i=1; i<=number; i++) {
    const n = i.toString();
    for(let j =0; j<n.length; j++) {
      //숫자에 3, 6, 9가 들어갈 경우 손뼉 +1
      if(n[j] == 3 || n[j] == 6 || n[j] == 9){
        result++;
      }
    }
  }
  return result;
}

module.exports = problem3;
