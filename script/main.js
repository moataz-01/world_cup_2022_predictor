let country = document.getElementsByClassName("country");
let winner = document.getElementsByClassName("winner");
let runnerUp = document.getElementsByClassName("runnerUp");
let groupWinners =[];
let runnerUps =[];
let msg = document.getElementById("msg");
let groups = document.getElementById("grps");
let nextBtn = document.getElementById("nextBtn");
let title = document.getElementById("titl");
let playoffs = document.getElementById("playoffs");
let roundOf16 = document.getElementById("roundOf16");
let lightOrDark = document.getElementById("lightOrDark");


$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 30);
    });
});


let passWinner = (clickedCountry, groupIndex) => {
    if(winner[groupIndex].innerHTML === "Winner" && runnerUp[groupIndex].innerHTML != country[clickedCountry].innerHTML) {
        winner[groupIndex].innerHTML = country[clickedCountry].innerHTML;
        winner[groupIndex].style.backgroundColor = "grey";
        country[clickedCountry].style.opacity = "0.5";
        groupWinners[groupIndex] = country[clickedCountry];
    }
    else if(runnerUp[groupIndex].innerHTML === "Runneer-up" && winner[groupIndex].innerHTML != country[clickedCountry].innerHTML) {
        runnerUp[groupIndex].innerHTML = country[clickedCountry].innerHTML;
        runnerUp[groupIndex].style.backgroundColor = "grey";
        country[clickedCountry].style.opacity = "0.5";
        runnerUps[groupIndex] = country[clickedCountry];
    } 
    else if(winner[groupIndex].innerHTML == country[clickedCountry].innerHTML) {
        winner[groupIndex].innerHTML = "Winner";
        winner[groupIndex].style.backgroundColor = "initial";
        country[clickedCountry].style.opacity = "1";
        groupWinners[groupIndex] = undefined;
    }
    else if(runnerUp[groupIndex].innerHTML == country[clickedCountry].innerHTML) {
        runnerUp[groupIndex].innerHTML = "Runneer-up";
        runnerUp[groupIndex].style.backgroundColor = "initial";
        country[clickedCountry].style.opacity = "1";
        runnerUps[groupIndex] = undefined;
    }

};

for(let i = 0; i < 4; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 0)});
}
for(let i = 4; i < 8; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 1)});
}
for(let i = 8; i < 12; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 2)});
}
for(let i = 12; i < 16; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 3)});
}
for(let i = 16; i < 20; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 4)});
}
for(let i = 20; i < 24; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 5)});
}
for(let i = 24; i < 28; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 6)});
}
for(let i = 28; i < 32; i++) {
    country[i].addEventListener("click", function(){passWinner(i, 7)});
}

let validation = () => {
    for(let i = 0; i < groupWinners.length; i++) {
        if(groupWinners[i] == undefined) {
            msg.innerHTML = "Please choose qualified teams in all Groups";
            console.log("false2")
            return false;
        } else if(runnerUps[i] == undefined) {
            msg.innerHTML = "Please choose qualified teams in all Groups";
            console.log("false2")
            return false;     
        } 
    }
    if(groupWinners.length != 8 || runnerUps.length != 8) {
        msg.innerHTML = "Please choose qualified teams in all Groups";
        console.log("false1")
        return false;
    }
    msg.innerHTML = "";
    return true;    
}

let next = () => {
    if(validation()) {
        title.style.display = "none";
        groups.style.display = "none";
        nextBtn.style.display = "none";
        console.log(groupWinners);
        console.log(runnerUps);
        playoffs.style.display ="flex";

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[0].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[1].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[2].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[3].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[4].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[5].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[6].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[7].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[1].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[0].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[3].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[2].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[5].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[4].innerHTML}</div>`; 

        roundOf16.children[1].children[0].innerHTML += `<div class="country match">${groupWinners[7].innerHTML}</div>`;
        roundOf16.children[1].children[1].innerHTML += `<div class="country match">${runnerUps[6].innerHTML}</div>`; 
        
        quarter();
    }
}

let match = document.getElementsByClassName("match");
let round16Winners1 = document.getElementsByClassName("round16Winner1");
let round16Winners2 = document.getElementsByClassName("round16Winner2");
let roundof16Winner = (id, matchNum, index) => {
    if(matchNum %2 != 0) {
        round16Winners1[index].innerHTML = `<div class="country sMatch">${match[id].innerHTML}</div>`;
    } else {
        round16Winners2[index].innerHTML = `<div class="country sMatch">${match[id].innerHTML}</div>`;
    }
    semi();
}
let quarter = () => {
    for(let i =0; i < match.length; i++) {
        if(i == 0 || i == 8){
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 1, 0);
            });
        }
        else if(i == 1 || i == 9) {
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 2, 0);
            });
        }
        else if(i == 2 || i == 10){
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 3, 1);
            });
        }
        else if(i == 3 || i == 11) {
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 4, 1);
            });
        }
        else if(i == 4 || i == 12){
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 5, 2);
            });
        }
        else if(i == 5 || i == 13) {
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 6, 2);
            });
        }
        else if(i == 6 || i == 14){
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 7, 3);
            });
        }
        else if(i == 7 || i == 15) {
            match[i].addEventListener("click", function(){
                roundof16Winner(i, 8, 3);
            });
        }
    }
    console.log(match);
}
let sMatch = document.getElementsByClassName("sMatch");
let quarterWinner1 = document.getElementsByClassName("quarterWinner1");
let quarterWinner2 = document.getElementsByClassName("quarterWinner2");
let quarterFinalWinner = (id, matchNum, index) => {
    if(matchNum %2 != 0) {
        quarterWinner1[index].innerHTML = `<div class="country fMatch">${sMatch[id].innerHTML}</div>`;
    } else {
        quarterWinner2[index].innerHTML = `<div class="country fMatch">${sMatch[id].innerHTML}</div>`;
    }
    final();
}
let semi = () =>{
    for(let i =0; i < sMatch.length; i++) {
        if(i == 0 || i == 4){
            sMatch[i].addEventListener("click", function(){
                quarterFinalWinner(i, 1, 0);
            });
        }
        else if(i == 1 || i == 5) {
            sMatch[i].addEventListener("click", function(){
                quarterFinalWinner(i, 2, 0);
            });
        }
        else if(i == 2 || i == 6){
            sMatch[i].addEventListener("click", function(){
                quarterFinalWinner(i, 3, 1);
            });
        }
        else if(i == 3 || i == 7) {
            sMatch[i].addEventListener("click", function(){
                quarterFinalWinner(i, 4, 1);
            });
        }
    }
    console.log(sMatch);
}
let fMatch = document.getElementsByClassName("fMatch");
let finalMatch1 = document.getElementById("finalMatch1");
let finalMatch2 = document.getElementById("finalMatch2");
let thirdMatch1 = document.getElementById("thirdMatch1");
let thirdMatch2 = document.getElementById("thirdMatch2");
let semiFinalWinner = (id, matchNum) => {
    if(matchNum %2 != 0) {
        finalMatch1.innerHTML = `<div class="country worldCupWinner">${fMatch[id].innerHTML}</div>`;
        if(id == 0) {
            thirdMatch1.innerHTML = `<div class="country">${fMatch[2].innerHTML}</div>`;
        } else {
            thirdMatch1.innerHTML = `<div class="country">${fMatch[0].innerHTML}</div>`;
        }
    } else {
        finalMatch2.innerHTML = `<div class="country worldCupWinner">${fMatch[id].innerHTML}</div>`;
        if(id == 1) {
            thirdMatch2.innerHTML = `<div class="country">${fMatch[3].innerHTML}</div>`;
        } else {
            thirdMatch2.innerHTML = `<div class="country">${fMatch[1].innerHTML}</div>`;
        }
    }
    win();
}
let final = () => {
    for(let i =0; i < fMatch.length; i++) {
        if(i == 0 || i == 2) {
            fMatch[i].addEventListener("click", function(){
                semiFinalWinner(i, 1);
            });
        }
        else if(i == 1 || i == 3) {
            fMatch[i].addEventListener("click", function(){
                semiFinalWinner(i, 2);
            });
        }
    }
    console.log(fMatch);
}

let worldCupWinner = document.getElementsByClassName("worldCupWinner");
let theWinnerPage = document.getElementById("theWinner");
let win = () => {
    for(let i = 0; i < worldCupWinner.length; i++) {
        worldCupWinner[i].addEventListener("click", function(){
            playoffs.style.display = "none";
            theWinnerPage.style.display = "block";
            theWinnerPage.children[1].src = worldCupWinner[i].children[0].src;
            theWinnerPage.children[2].innerHTML = worldCupWinner[i].children[1].innerHTML;
        });
    }
    console.log(worldCupWinner);
}

let reload = () => {
    location.reload();
};