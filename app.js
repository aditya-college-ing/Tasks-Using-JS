function checkAnswers(event) {
  event.preventDefault();

  let score = 0;
  let totalQuestions = 10;
  let correctAnswers = {
      q1: "Jim Corbett National Park",
      q2: "Hemis National Park",
      q3: "Jim Corbett ",
      q4: "Kaziranga National Park",  
      q5: "Bandipur National Park",
      q6: "Assam",
      q7: "Teller",
      q8: "Financial",
      q9: "Access",
      q10:"Business Continuity Plan",
  };

  for (let i = 1; i <= totalQuestions; i++) {
      let selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
      if (selectedAnswer && selectedAnswer.value.trim() === correctAnswers[`q${i}`].trim()) {
          score++; 
      }
  }
  let result = document.getElementById("result");
  result.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}

    
   