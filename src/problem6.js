const SPLIT_CREW_NAME = [];
const DUPLICATE_CREW_NAME = [];

function problem6(forms) {
  const result = new Set();
  
  forms.forEach(crew => splitCrewName(crew));

  forms.forEach(crew => {
    for (let i=0; i<crew[1].length-1; i++) {
      if (DUPLICATE_CREW_NAME.includes(crew[1].slice(i, i+2))) result.add(crew[0]);
    }
  });

  return [...result].sort();
}

function splitCrewName(crew) {
  const crewNickName = crew[1];
  for (let j=0; j<crewNickName.length-1; j++) {
    const splitNickName = crewNickName.slice(j, j+2);
    if (SPLIT_CREW_NAME.includes(splitNickName)) {
      DUPLICATE_CREW_NAME.push(splitNickName);
    } else if (!SPLIT_CREW_NAME.includes(SPLIT_CREW_NAME)) {
      SPLIT_CREW_NAME.push(splitNickName);
    }
  }  
}

module.exports = problem6;
