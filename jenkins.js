const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

console.log("🎮 Rock Paper Scissors Game");
console.log("Type: rock, paper, or scissors");

rl.question("Your choice: ", (userChoice) => {

  userChoice = userChoice.toLowerCase();

  if (!choices.includes(userChoice)) {
    console.log("❌ Invalid choice!");
    rl.close();
    return;
  }

  console.log(`🧑 You chose: ${userChoice}`);
  console.log(`💻 Computer chose: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("🤝 It's a draw!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("🏆 You win!");
  } else {
    console.log("😢 Computer wins!");
  }

  rl.close();
});
