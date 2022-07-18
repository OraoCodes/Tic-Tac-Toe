function startNewGame(){
    if(players[0].name  === '' || players[1].name === '' ){
        alert('Please set custom for the players')
        return;
    }
    gameAreaElement.style.display = 'block';
}