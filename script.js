const options = document.querySelectorAll(".pick");
const game = document.querySelector(".game");
const picked = document.querySelector(".picked");
const youPicked = document.querySelector(".you_picked");
const housePicked = document.querySelector(".house_picked");
const house = document.querySelector(".house");
const score = document.querySelector(".score_second");
const rules = document.querySelector(".rules");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const div = document.createElement("div");
div.setAttribute("class", "game_end");
const p = document.createElement("p");
const button = document.createElement("button");
button.textContent = "PLAY AGAIN";
div.appendChild(p);
div.appendChild(button);
let hScore = 12;
const updateScore = () => {
  score.textContent = hScore;
};

updateScore();

options.forEach((option) => {
  option.addEventListener("click", function () {
    game.classList.add("none");
    picked.classList.remove("none");
    const elementX = this.cloneNode(true);
    elementX.classList.add("static");
    youPicked.appendChild(elementX);
    const source = this.getAttribute("data-value");
    const computerOptions = ["rock", "paper", "scissors"];
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    function housePick() {
      if (computerChoice === "rock") {
        const rock = document.querySelector(".svg");
        const element = rock.cloneNode(true);
        element.classList.add("static");
        housePicked.appendChild(element);
      } else if (computerChoice === "paper") {
        const paper = document.querySelector(".paper");
        const element1 = paper.cloneNode(true);
        element1.classList.add("static");
        housePicked.appendChild(element1);
      } else {
        const scissors = document.querySelector(".last");
        const element2 = scissors.cloneNode(true);
        element2.classList.add("static");
        housePicked.appendChild(element2);
      }
    }

    housePick();

    if (source === "0" && computerChoice === "paper") {
      p.textContent = "Play again";
      picked.insertBefore(div, house);
    } else if (source === "1" && computerChoice === "scissors") {
      p.textContent = "Play again";
      picked.insertBefore(div, house);
    } else {
      p.textContent = "Play again";
      picked.insertBefore(div, house);
    }

    if (source === "0" && computerChoice === "scissors") {
      p.textContent = "You lose";
      picked.insertBefore(div, house);
      hScore--;
      updateScore();
    } else if (source === "0" && computerChoice === "rock") {
      p.textContent = "You win";
      picked.insertBefore(div, house);
      hScore++;
      updateScore();
    }

    if (source === "1" && computerChoice === "rock") {
      p.textContent = "You Lose";
      picked.insertBefore(div, house);
      hScore--;
      updateScore();
    } else if (source === "1" && computerChoice === "paper") {
      p.textContent = "You win";
      picked.insertBefore(div, house);
      hScore++;
      updateScore();
    }
    if (source === "2" && computerChoice === "scissors") {
      p.textContent = "You win";
      picked.insertBefore(div, house);
      hScore++;
      updateScore();
    } else if (source === "2" && computerChoice === "paper") {
      p.textContent = "You lose";
      picked.insertBefore(div, house);
      hScore--;
      updateScore();
    }
  });
});

rules.addEventListener("click", () => {
  modal.classList.toggle("none");
});
close.addEventListener("click", () => {
  modal.classList.add("none");
});

function buttonClick() {
  picked.classList.add("none");
  game.classList.remove("none");
  youPicked.textContent = "";
  housePicked.textContent = "";
}
button.addEventListener("click", buttonClick);
