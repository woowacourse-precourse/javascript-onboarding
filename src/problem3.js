function getCount(number){
  let count = 0;
  
  for(let i = 1 ; i < number + 1 ; i++){
    const numArr = (i + '').split('');
    for(let j = 0 ; j<numArr.length ; j++){
      if(numArr[j]=="3" || numArr[j]=="6" || numArr[j]=="9") count++;
    }
  }
  return count;
}

function problem3(number) {

  return getCount(number);

}

module.exports = problem3;
