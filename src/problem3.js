function problem3(number) {
  
  let count = 0;
  
  for (let i=1; i<=number; i++){
    let arr = String(i).split('');   

    for(let v= 0; v<arr.length; v++){
      if(arr[v]=="3" || arr[v]=="6" || arr[v]=="9") count+=1;
    };
  };

  return count;
}

module.exports = problem3;
