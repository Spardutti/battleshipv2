import gameBoard from "./gameBoard"


const player = () => {
    let player = true;
    if (player) {
        gameBoard.receiveAttack();
        player = !player;
    }
}