function problem3(number) {
  let result = 0
  for(let i =1; i<=number;i++){
    let a = String(i);
    for(let j =0;j<a.length;j++){
      if((a[j]).includes('3')||(a[j]).includes('6')||(a[j]).includes('9')){    
        result++
      }

  }
}
return result
}
module.exports = problem3;
