//맵에 string이 이미 있는지 없는지 확인하는 함수
const checkMap = (index,string,maps) => {
  //맵에 이미 string이 있다면 index를 추가해준다.
  if (maps.has(string)) {
    const valueOfMap = maps.get(string);
    maps.set(string, [...valueOfMap, index]);
  }
  if (!maps.has(string)) {
    maps.set(string, [index]);
  }
};

 //map을 순회하며 중복되는 유저의 이메일을 찾는 함수
 const mapValueMoreThanOne = (maps,same,forms) =>{
  //map의 value를 순회하며 배열의 크기 1보다 크면 
  for(let map of maps.values()){
    if (map.length > 1) {
      for(let i =0 ; i<map.length; i++){
        //해당 인덱스를 가진 forms의 이메일을 푸쉬
          same.push(forms[map[i]][0]);
        }
      
    }
  }
};
const removeSame = (same) => {
  same = [...new Set(same)];
  return same;
}
//메인  함수
function problem6(forms){
  let maps = new Map();
  let same = [];

  //현재 인덱스와 다음인덱스를 합친 string을 확인 함수에 전달
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
        const string = forms[i][1][j]+forms[i][1][j + 1];
        checkMap(i, string, maps);
    }
  }

  mapValueMoreThanOne(maps, same, forms);
  same = removeSame(same)
  return same.sort();
}


module.exports = problem6;
