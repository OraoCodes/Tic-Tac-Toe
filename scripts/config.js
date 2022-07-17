function openPlayerConfig(event){
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
};

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('username').trim();

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please Enter a valid name';
        return;
    }
const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
updatedPlayerDataElement.children[1].textContent = enteredPlayername;

// if(editedPlayer === 1){
//     players[0].name = enteredPlayername;
// }else{
//     players[1].name = enteredPlayername;
// }
/*OR*/
players[editedPlayer - 1].name = enteredPlayername

closePlayerConfig();
}