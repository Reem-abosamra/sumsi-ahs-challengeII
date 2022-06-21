var players = [{ name: "johnny", score: 2 }];
var playerMarkup = function (playerName, playerScore, index) { return "<li class=\"section\">\n<div class=\"row-element row-element--left delete-button button\" onclick=\"removePlayer(".concat(index, ")\">X</div>\n<div class=\"row-element row-element--center\"><span>").concat(playerName, "</span></div>\n<div class=\"row-element row-element--right\">\n    <div class=\"score-element score-element--decrement button ").concat(playerScore > 0 ? "" : "disabled", "\" onclick=\"decrement(").concat(index, ")\">-</div>\n    <div class=\"score-element score-element--current\">").concat(playerScore, "</div>\n    <div class=\"score-element score-element--increment button\" onclick=\"increment(").concat(index, ")\">+</div>\n</div>\n</li>"); };
var increment = function (index) {
    var score = players[index].score;
    var newScore = score + 1;
    players[index].score = newScore;
    render();
};
var decrement = function (index) {
    var score = players[index].score;
    if (score > 0) {
        var newScore = score - 1;
        players[index].score = newScore;
    }
    render();
};
var render = function () {
    var playersContainer = document.getElementById("players--container");
    if (playersContainer) {
        playersContainer.innerHTML = "";
        players.map(function (_a, index) {
            var name = _a.name, score = _a.score;
            playersContainer.innerHTML += playerMarkup(name, score, index);
        });
    }
};
var addPlayer = function (event) {
    event.preventDefault();
    var inputElem = event.target[0];
    players.push({
        name: inputElem.value,
        score: 0
    });
    inputElem.value = "";
    render();
};
var removePlayer = function (index) {
    players.splice(index, 1);
    render();
};
