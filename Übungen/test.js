document.addEventListener("DOMContentLoaded", function () {
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const message = document.getElementById("message");
  const resetButton = document.getElementById("reset");

  let player1Position = 0;
  let player2Position = 0;
  const finishLine = 80; // Zielposition (Prozent)
  let gameOver = false;

  // Bewegen der Spieler
  document.addEventListener("keydown", function (event) {
    if (gameOver) return;

    if (event.key === "a") {
      // Spieler 1 bewegt sich nach rechts
      player1Position += 5;
      player1.style.left = player1Position + "%";
      checkWinner();
    } else if (event.key === "l") {
      // Spieler 2 bewegt sich nach links
      player2Position += 5;
      player2.style.right = player2Position + "%";
      checkWinner();
    }
  });

  // Überprüfen, ob ein Spieler gewonnen hat
  function checkWinner() {
    if (player1Position >= finishLine) {
      message.textContent = "Player 1 Wins!";
      gameOver = true;
    } else if (player2Position >= finishLine) {
      message.textContent = "Player 2 Wins!";
      gameOver = true;
    }
  }

  // Zurücksetzen des Spiels
  resetButton.addEventListener("click", function () {
    player1Position = 0;
    player2Position = 0;
    player1.style.left = "0%";
    player2.style.right = "0%";
    message.textContent = "";
    gameOver = false;
  });
});
