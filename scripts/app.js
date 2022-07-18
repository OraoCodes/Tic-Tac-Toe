// Access the edit button - adding event listeners
let editedPlayer = 0;
const players = [
    {
        name: '',
        Symbol:'X'
    },
    {
        name: '',
        Symbol:'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtn = document.getElementById('cancel-config-btn');

const startNewGameBtnElement = document.getElementById('start-game-btn');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtn.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);
