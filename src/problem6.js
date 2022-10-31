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

}

module.exports = problem6;
