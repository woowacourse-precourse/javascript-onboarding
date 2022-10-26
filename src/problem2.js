function problem2(cryptogram) {
  let arr = [...cryptogram];
  let i=0;
  while(i!==arr.length){
  if(arr[i]===arr[i+1]){
    arr.splice(i,2);    
      i=0;
  }
  else{
      i++;
  }
}
return arr.join('');
}

module.exports = problem2;
