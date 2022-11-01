function problem1(pobi, crong) {

if(pobi.length!=2||crong.length!=2){
    return -1
}
//페이지 렌덤생성
function PageEndCheck(arr){
    if(arr[0]===0){//왼쪽 페이지 0이거나
        return true;
    }else if(arr[1]===400){//오른쪽 페이지 400이면
        return true;
    }else{
        return false;
    }
}
function Exception(arr){
    if(arr[0]+1===arr[1]){
        return true;
    }else{
        return false;
    }
}
function GetMax(arr){
    let max_num=0;
    let right=arr[1].toString()
    let left=arr[0].toString()
    //예외 케이스

    //초기화
    let multi=1;
    let sum=0;
    //오른쪽 페이지
    for(let i=0;i<right.length;i++){
        //오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
        sum=sum+Number(right[i])//오른쪽 페이지 합
        multi=multi*Number(right[i])//오른쪽 페이지 곱
        //2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
        max_num=Math.max(max_num,sum)
        max_num=Math.max(max_num,multi)
    }
    //초기화
    multi=1;
    sum=0;
    //왼쪽 페이지
    for(let i=0;i<left.length;i++){
         //왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
        sum=sum+Number(left[i])//오른쪽 페이지 합
        multi=multi*Number(left[i])//오른쪽 페이지 곱
        //2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
        max_num=Math.max(max_num,sum)
        max_num=Math.max(max_num,multi)
    }
    return max_num;
}
let pobi_num=GetMax(pobi)
let cronog_num=GetMax(crong)
var answer
if(pobi_num>cronog_num){//포비가 이긴다면 1
    answer=1;
}else if(pobi_num<cronog_num){//크롱이 이긴다면 2
    answer=2;
}else if(pobi_num===cronog_num){// 무승부는 0
    answer=0;
}

if(Exception(pobi)===false||Exception(crong)===false){
    answer=-1;
}
if(PageEndCheck(pobi)||PageEndCheck(crong)){
    answer=-1;
}

return answer;
}
module.exports = problem1;
