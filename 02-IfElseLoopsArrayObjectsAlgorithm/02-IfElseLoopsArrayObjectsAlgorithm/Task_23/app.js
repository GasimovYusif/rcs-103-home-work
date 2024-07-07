const students = [
    { 
        name: "Ali", 
        scores: [90, 85, 92] 
    },
    { 
        name: "Davud", 
        scores: [100, 100, 100] 
    },
    { 
        name: "Mammad", 
        scores: [75, 80, 85] 
    },
    { 
        name: "Camil", 
        scores: [90, 95, 85] 
    }
  ];
  

  function calculateScores(students) {
    const averageArr = [];
    
    for (let i = 0; i < students.length; i++) {
      const scores = students[i].scores;
      let total = 0;
      
      for (let j = 0; j < scores.length; j++) {
        total += scores[j];
      }
      
      const average = total / scores.length;
      averageArr.push(average);
    }
    
    return averageArr;
  }
  
  const averageArr = calculateScores(students);
  console.log(averageArr);