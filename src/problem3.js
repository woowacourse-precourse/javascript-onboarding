function problem3(number) {
  let answer=0;
  for(let i=0;i<number+1;i++){
   let share=i
   let rest
   while(share!=0){
   rest=share%10
   share=parseInt(share/10)
   if( rest==3 || rest==6 || rest==9 ){
    answer+=1
   }
   }
}
  return answer;
}

module.exports = problem3;
