
//General game interactions with buttons deployment
function elementalTotalWar() {
    //Catchers for the buttons interactions
    let playerButton=document.getElementById("PlayerButton");
    let elementalButton=document.getElementById("ElementalButton");

    //Button actions
    playerButton.addEventListener("click",playerInfo);
    elementalButton.addEventListener("click",elementalSelection);
}

//Mechanism to get the Player Name triggered by the button
function playerInfo() {
    let playerName=document.getElementById("nameInput").value;
    alert("Elemental Master Name Selected!!");
    return playerName;
}

//Mechanism to get the elemental selection triggered by the player on the "Elementals Section"
function elementalSelection() {
    //Calling the status of the input radio objects (true/false)
    let earthElemental=document.getElementById("EarthElemental").checked;
    let fireElemental=document.getElementById("FireElemental").checked;
    let waterElemental=document.getElementById("WaterElemental").checked;
    let windElemental=document.getElementById("WindElemental").checked;
    //Evaluation of the player selection
    if (earthElemental) {
        alert("You have choose Earth Elemental");
    } else if (fireElemental) {
        alert("You have choose Fire Elemental");
    } else if (waterElemental) {
        alert("You have choose Water Elemental");
    } else if (windElemental) {
        alert("You have choose Wind Elemental");
    } else {
        alert("You haven't choose")
    }
}



//On load script execution
window.addEventListener("load",elementalTotalWar)