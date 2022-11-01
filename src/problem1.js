function makeMax(n){
  let [add,mul]=[0,1];
  str_num = String(n);
  str_num.split('').forEach((num)=>{
      add+=parseInt(num);
      mul*=parseInt(num);
  });
  return Math.max(add,mul);
}

function isVaildPage(pages){
  return pages[1]-pages[0]===1;
}

function problem1(pobi, crong){
  if (!(isVaildPage(pobi)&&isVaildPage(crong))){
      return -1;
  }
  const pobi_ans = Math.max.apply(null,
                   pobi.map((num)=>makeMax(num)));
  const crong_ans = Math.max.apply(null,
                   crong.map((num)=>makeMax(num)));
  const answer = pobi_ans<crong_ans? 2
                :(pobi_ans>crong_ans? 1 : 0);
  return answer;
}

module.exports = problem1;
