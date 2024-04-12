document.addEventListener("DOMContentLoaded", function() {
    const targetWord = "javascript"; // Palavra correta
    const feedback = document.getElementById("feedback");
    const scrambledWordElement = document.getElementById("scrambledWord"); // Elemento para exibir a palavra embaralhada
  
    // Chame a função para exibir a palavra embaralhada quando a página for carregada
    showScrambledWord(targetWord);
  
    document.getElementById("guessButton").addEventListener("click", function() {
      const guess = document.getElementById("guessInput").value.toLowerCase();
      
      if (guess === targetWord) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";
      } else {
        const similarity = similarityScore(targetWord, guess);
        if (similarity >= 0.5) {
          feedback.textContent = "Quase lá! Tente novamente.";
          feedback.style.color = "green";
        } else {
          feedback.textContent = "Palavra incorreta. Tente novamente.";
          feedback.style.color = "red";
        }
      }
    });
  
    function similarityScore(word1, word2) {
      const len = Math.min(word1.length, word2.length);
      let score = 0;
      for (let i = 0; i < len; i++) {
        if (word1[i] === word2[i]) {
          score++;
        }
      }
      return score / Math.max(word1.length, word2.length);
    }
    
    // Função para embaralhar a palavra alvo e exibi-la
    function showScrambledWord(word) {
      const shuffledWord = shuffleWord(word);
      scrambledWordElement.textContent = `Palavra Embaralhada: ${shuffledWord}`;
    }
    
    // Função para embaralhar a palavra
    function shuffleWord(word) {
      return word.split('').sort(() => Math.random() - 0.5).join('');
    }
});
