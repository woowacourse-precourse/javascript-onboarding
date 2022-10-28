function problem6(forms) {
  const splitCrewName = [];
  const duplicateName = [];
  const result = new Set();
  
  forms.forEach(crew => {
    const crewNickName = crew[1];
    for (let j=0; j<crewNickName.length-1; j++) {
      const splitNickName = crewNickName.slice(j, j+2); // 크루의 닉네임을 2개씩 slice
      if (splitCrewName.includes(splitNickName)) {
        duplicateName.push(splitNickName); // 중복된 닉네임을 duplicateName 배열에 저장
      } else if (!splitCrewName.includes(splitCrewName)) {
        splitCrewName.push(splitNickName);
      }
    }  
  });

}

module.exports = problem6;
