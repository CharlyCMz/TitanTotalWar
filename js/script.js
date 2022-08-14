
function elementalTotalWar() {
    //Catchers for the buttons interactions
    let playerButton=document.getElementById("PlayerButton");

    //Button actions
    playerButton.addEventListener("click",playerInfo);
}
function playerInfo() {
    alert("Elemental Master Name Selected!!");
}

//On load script execution
window.addEventListener("load",elementalTotalWar)