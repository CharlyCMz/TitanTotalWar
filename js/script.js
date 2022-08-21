
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
    let playerElemental=document.getElementById("playerElementalName");
    //Evaluation of the player selection
    if (earthElemental) {
        alert("You have choose Earth Elemental");
        playerElemental.innerHTML="Earth Elemental";
    } else if (fireElemental) {
        alert("You have choose Fire Elemental");
        playerElemental.innerHTML="Fire Elemental";
    } else if (waterElemental) {
        alert("You have choose Water Elemental");
        playerElemental.innerHTML="Water Elemental";
    } else if (windElemental) {
        alert("You have choose Wind Elemental");
        playerElemental.innerHTML="Wind Elemental";
    } else {
        alert("You haven't choose")
    }
    //Calling for the AI random selection 
    aiElementalSelection();
}

//This mechanism randoms the AI choise for the Elemental Options
function aiElementalSelection() {
    //Obtain a random number to target an elemental
    let randomMultiplier=randomChoice(0,4);
    //Obtain the span tag for the AI companion HTML Insertion
    let aiElemental=document.getElementById("aiElementalName");
    //Structure for numerical selection of each elemental
    if (randomMultiplier==1) {
        // Earth Elemental
        aiElemental.innerHTML="Earth Elemental";
    } else if (randomMultiplier==2) {
        // Fire Elemental
        aiElemental.innerHTML="Fire Elemental";
    } else if (randomMultiplier==3) {
        // Water Elemental
        aiElemental.innerHTML="Water Elemental";
    } else {
        // Wind Elemental
        aiElemental.innerHTML="Wind Elemental";
    }
}

function randomChoice(min,max) {
    //We use the Math package, "ceil" is implemented to round up a number and,
    //with "random()" random numbers between 0 and 1 are generated.
    let random=Math.ceil((max-min)*Math.random())+min;
    return random;
}


//On load script execution
window.addEventListener("load",elementalTotalWar)