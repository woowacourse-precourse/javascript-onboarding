function deleteDuplicate(point){
  point=point-1;
  return point;
}
function addString(point){
  point=point+1;
  return point;
}
function findDuplicate(cryptogram){
  let decrypt_arr=[];
  let point=0;
  for(let i=0;i<cryptogram.length;i++){
    if(cryptogram[i]==decrypt_arr[point]){
      point=deleteDuplicate(point);
    }
    else{
      point=addString(point);
      decrypt_arr[point]=cryptogram[i];
    }
  }
  return decrypt_arr.slice(0,point+1);
}
function problem2(cryptogram) {
  let answer;
  answer=findDuplicate(cryptogram).join('');
  return answer;
}
module.exports = problem2;