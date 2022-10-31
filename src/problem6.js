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
  return [...new Set(same)]
}

module.exports = problem6;
