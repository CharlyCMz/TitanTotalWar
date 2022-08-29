//Global Variables
let playerAttack;
let aiAttack;
let playerHitPoints=300;
let aiHitPoints=300;

//General game interactions with buttons deployment
function elementalTotalWar() {
    //Catchers for the buttons interactions and section managements
    let elementalsSection=document.getElementById("Elementals");
    let duelSection=document.getElementById("DuelInfo");
    let attackSection=document.getElementById("Attacks");
    let resultSection=document.getElementById("Results");
    let closureSection=document.getElementById("duelClosure");
    let resetSection=document.getElementById("newBattle");
    let playerButton=document.getElementById("PlayerButton");
    let elementalButton=document.getElementById("ElementalButton");
    let attackQ=document.getElementById("AttackQ");
    let attackW=document.getElementById("AttackW");
    let attackE=document.getElementById("AttackE");
    let attackR=document.getElementById("AttackR");
    let resetButton=document.getElementById("gameReset");
    
    //Button actions
    playerButton.addEventListener("click",playerInfo);
    elementalButton.addEventListener("click",elementalSelection);
    attackQ.addEventListener("click",selectedAttackQ);
    attackW.addEventListener("click",selectedAttackW);
    attackE.addEventListener("click",selectedAttackE);
    attackR.addEventListener("click",selectedAttackR);
    resetButton.addEventListener("click",gameReset);

    //Sections visibility config
    elementalsSection.style.display="none"
    duelSection.style.display="none"
    attackSection.style.display="none"
    resultSection.style.display="none"
    closureSection.style.display="none"
    resetSection.style.display="none"
}

//Mechanism to get the Player Name triggered by the button
function playerInfo() {
    //Catching of player name
    let playerName=document.getElementById("nameInput").value;
    //Catching of the HTML element to put the player name on Screen
    let nameSpan=document.getElementById("masterName");
    nameSpan.innerHTML=playerName;
    //Hide the name selection section
    let playerInfoSection=document.getElementById("PlayerInfo");
    playerInfoSection.style.display="none"
    //Changing the display options of the next section
    let elementalsSection=document.getElementById("Elementals");
    elementalsSection.style.display="flex"
}

//Mechanism to get the elemental selection triggered by the player on the "Elementals Section"
function elementalSelection() {
    //Calling the status of the input radio objects (true/false)
    let earthElemental=document.getElementById("EarthElemental").checked;
    let fireElemental=document.getElementById("FireElemental").checked;
    let waterElemental=document.getElementById("WaterElemental").checked;
    let windElemental=document.getElementById("WindElemental").checked;
    //Obtaining the HTML elements to insert the info of Player Companion
    let playerElemental=document.getElementById("playerElementalName");
    let playerElementalImg=document.getElementById("playerElementalImg");
    //Evaluation of the player selection
    if (earthElemental) {
        playerElementalImg.src="../img/EarthElemental-removebg-preview.png";
        playerElemental.innerHTML="Earth Elemental";
    } else if (fireElemental) {
        playerElementalImg.src="../img/FireElemental-removebg-preview.png";
        playerElemental.innerHTML="Fire Elemental";
    } else if (waterElemental) {
        playerElementalImg.src="../img/WaterElemental-removebg-preview.png";
        playerElemental.innerHTML="Water Elemental";
    } else if (windElemental) {
        playerElementalImg.src="../img/WindElemental-removebg-preview.png";
        playerElemental.innerHTML="Wind Elemental";
    } else {
        alert("You haven't choose")
    }
    //Calling for the AI random selection 
    aiElementalSelection();
    //Control of the section visibility. Hide the current section and show the next step. The Battle
    let elementalsSection=document.getElementById("Elementals");
    elementalsSection.style.display="none"
    let duelSection=document.getElementById("DuelInfo");
    let attackSection=document.getElementById("Attacks");
    let resultSection=document.getElementById("Results");
    let closureSection=document.getElementById("duelClosure");
    duelSection.style.display="flex"
    attackSection.style.display="flex"
    resultSection.style.display="flex"
    closureSection.style.display="flex"
}

//This mechanism randoms the AI choise for the Elemental Options
function aiElementalSelection() {
    //Obtain a random number to target an elemental
    let randomMultiplier=randomChoice(0,4);
    //Obtain the span tag for the AI companion HTML Insertion
    let aiElemental=document.getElementById("aiElementalName");
    let aiElementalImg=document.getElementById("aiElementalImg");
    //Structure for numerical selection of each elemental
    if (randomMultiplier==1) {
        // Earth Elemental
        aiElementalImg.src="../img/EarthElemental-removebg-preview.png";
        aiElemental.innerHTML="Earth Elemental";
    } else if (randomMultiplier==2) {
        // Fire Elemental
        aiElementalImg.src="../img/FireElemental-removebg-preview.png";
        aiElemental.innerHTML="Fire Elemental";
    } else if (randomMultiplier==3) {
        // Water Elemental
        aiElementalImg.src="../img/WaterElemental-removebg-preview.png";
        aiElemental.innerHTML="Water Elemental";
    } else {
        // Wind Elemental
        aiElementalImg.src="../img/WindElemental-removebg-preview.png";
        aiElemental.innerHTML="Wind Elemental";
    }
}

function randomChoice(min,max) {
    //We use the Math package, "ceil" is implemented to round up a number and,
    //with "random()" random numbers between 0 and 1 are generated.
    let random=Math.ceil((max-min)*Math.random())+min;
    return random;
}

//Declaration of the Player Attacks
function selectedAttackQ() {
    playerAttack="Tackle";
    aiRandomAttack();
}
function selectedAttackW() {
    playerAttack="Headbut";
    aiRandomAttack();
}
function selectedAttackE() {
    playerAttack="Elemental Absortion";
    aiRandomAttack();
}
function selectedAttackR() {
    playerAttack="Elemental Rage";
    aiRandomAttack();
}

//Random selection of the AI attack
function aiRandomAttack() {
    //Obtain a random number to target an attack
    let randomMultiplier=randomChoice(0,4);
    //Identify the number with the corresponding attack
    if (randomMultiplier==1) {
        aiAttack="Tackle";
    } else if (randomMultiplier==2) {
        aiAttack="Headbut";
    } else if (randomMultiplier==3) {
        aiAttack="Elemental Absortion";
    } else {
        aiAttack="Elemental Rage";
    }
    //Function calling for battle log creation
    elementalDuel();
}

function elementalDuel() {
    let spanPlayerHP=document.getElementById("hitPointsP");
    let spanAIHP=document.getElementById("hitPointsAI");
    //Switch cases for damage calculation and hit point restoration for Player Actions
    switch (playerAttack) {
        case "Tackle":
            aiHitPoints-=20; //Damage dealed to the foe
            spanAIHP.innerHTML=aiHitPoints;
        break;
        case "Headbut":
            aiHitPoints-=30; //Damage dealed to the foe
            spanAIHP.innerHTML=aiHitPoints;
        break;
        case "Elemental Absortion":
            playerHitPoints+=35; //Hit points restored to the ally.
            spanPlayerHP.innerHTML=playerHitPoints;
        break;
        case "Elemental Rage":
            aiHitPoints-=50; //Damage dealed to the foe
            spanAIHP.innerHTML=aiHitPoints;
        break;
    }
    //Switch cases for damage calculation and hit point restoration for AI Actions
    switch (aiAttack) {
        case "Tackle":
            playerHitPoints-=20; //Damage dealed to the player companion
            spanPlayerHP.innerHTML=playerHitPoints
        break;
        case "Headbut":
            playerHitPoints-=30; //Damage dealed to the player companion
            spanPlayerHP.innerHTML=playerHitPoints
        break;
        case "Elemental Absortion":
            aiHitPoints+=35; //Hit points restored to the AI companion.
            spanAIHP.innerHTML=aiHitPoints;
        break;
        case "Elemental Rage":
            playerHitPoints-=50; //Damage dealed to the player companion
            spanPlayerHP.innerHTML=playerHitPoints
        break;
    }
    //Insertion of battle text
    createBattleLog();
    //Check the remaining hit points
    hitPointsCheck()
    console.log("Player HitPoints: "+playerHitPoints,"\n","AI HitPoints: "+aiHitPoints);
}

function createBattleLog() {
    let battleLog=document.getElementById("battleLogText");
    let log=document.createElement("p",);
    log.innerHTML="Your companion used "+playerAttack+" to attack, The foe responds with "+aiAttack+".";
    battleLog.appendChild(log);
}

function hitPointsCheck() {
    let spanPlayerHP=document.getElementById("hitPointsP");
    let spanAIHP=document.getElementById("hitPointsAI");
    if (playerHitPoints<=0 && aiHitPoints>0) {
        spanPlayerHP.innerHTML=0;
        duelClosureMsn("Defeat");
    } else if (aiHitPoints<=0 && playerHitPoints>0) {
        spanAIHP.innerHTML=0;
        duelClosureMsn("Victory");
    } else if (playerHitPoints<=0 && aiHitPoints<=0) {
        spanPlayerHP.innerHTML=0;
        spanAIHP.innerHTML=0;
        duelClosureMsn("Draw for AI and");
    }
}

function duelClosureMsn(duelResult) {
    let battleClosure=document.getElementById("duelClosure");
    let log=document.createElement("p",);
    log.innerHTML="End of the Battle!! ... This is a "+duelResult+" for you!!";
    battleClosure.appendChild(log);
    //Call for the attacking buttons to add the disable attribute
    let attackQ=document.getElementById("AttackQ");
    let attackW=document.getElementById("AttackW");
    let attackE=document.getElementById("AttackE");
    let attackR=document.getElementById("AttackR");
    //Adding of Disable TRUE
    attackQ.disabled=true;
    attackW.disabled=true;
    attackE.disabled=true;
    attackR.disabled=true;
    //Show the reset game button
    let newBattle=document.getElementById("newBattle");
    newBattle.style.display="block";
}

function gameReset() {
    location.reload();
}

//On load script execution
window.addEventListener("load",elementalTotalWar)