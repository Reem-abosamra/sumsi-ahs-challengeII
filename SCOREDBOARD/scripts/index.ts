type PlayerType = {
  name: string;
  score: number;
};
const players: PlayerType[] = [{ name: "johnny", score: 2 }];
const playerMarkup = (
  playerName: string,
  playerScore: number,
  index: number
) => `<li class="section">
<div class="row-element row-element--left delete-button button" onclick="removePlayer(${index})">X</div>
<div class="row-element row-element--center"><span>${playerName}</span></div>
<div class="row-element row-element--right">
    <div class="score-element score-element--decrement button ${
      playerScore > 0 ? "" : "disabled"
    }" onclick="decrement(${index})">-</div>
    <div class="score-element score-element--current">${playerScore}</div>
    <div class="score-element score-element--increment button" onclick="increment(${index})">+</div>
</div>
</li>`;
const increment = (index: number) => {
  const score = players[index].score;
  const newScore = score + 1;
  players[index].score = newScore;
  render();
};
const decrement = (index: number) => {
  const score = players[index].score;
  if (score > 0) {
    const newScore = score - 1;
    players[index].score = newScore;
  }
  render();
};
const render = () => {
  const playersContainer = document.getElementById("players--container");
  if (playersContainer) {
    playersContainer.innerHTML = "";
    players.map(({name, score}, index) => {
      playersContainer.innerHTML += playerMarkup(
        name,
        score,
        index
      );
    });
  }
};
const addPlayer = (event: SubmitEvent) => {
  event.preventDefault();
  const inputElem = (event.target as HTMLFormElement)[0] as HTMLInputElement;
  players.push({
    name: inputElem.value,
    score: 0,
  });
  inputElem.value = "";
  render();
};
const removePlayer = (index: number) => {
  players.splice(index, 1);
  render();
};