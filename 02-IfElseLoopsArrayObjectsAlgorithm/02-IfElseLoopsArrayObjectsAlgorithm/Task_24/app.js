const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
  ];
  
  function filterTechs(elements) {
    const longarr = [];
    
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].length > 4) {
        longarr.push(elements[i]);
      }
    }
    
    return longarr;
  }
  
  const longarr = filterTechs(webTechs);
  console.log(longarr); 