//숫자 인수 받아 각자리합, 곱 중 최댓값 반환
function makeMax(n){
  let [add,mul]=[0,1];
  str_num = String(n);
  str_num.split('').forEach((num)=>{
    add+=parseInt(num);
    mul*=parseInt(num);
  });
  return Math.max(add,mul);
}

//페이지가 순서되로 되어있으며, 1쪽 차이 나는지 확인하여 boolean 반환
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
