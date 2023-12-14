/*
 *  Function: updateStylesForRent
 *  Description: It will take an element, and then access its classList - 
 *  thus adding or removing an element (add and remove only works once).
*/

function updateStylesForRent(element, addStyle, removeStyle) {
    element.add(addStyle);
    element.remove(removeStyle);
}

function checkRent(id) {
    let gameClick = document.getElementById(`game-${id}`);
    let buttonGame = gameClick.querySelector(".games__menu-button");
    let checkItemRent = gameClick.classList;
    let checkButtonGame = buttonGame.classList;
    let checkGamesGiveBack = checkItemRent.contains("games__give-back");

    let nameStyleButton = "games__button";
    let nameStyleGiveBack = "games__give-back";

    if (checkGamesGiveBack) {
        buttonGame.textContent = "Alugar";

        updateStylesForRent(checkButtonGame, `${nameStyleButton}-blue`, `${nameStyleButton}-black`);
        checkItemRent.remove(nameStyleGiveBack);
    } else {
        buttonGame.textContent = "Devolver";

        updateStylesForRent(checkButtonGame, `${nameStyleButton}-black`, `${nameStyleButton}-blue`);
        checkItemRent.add(nameStyleGiveBack);
    }
}