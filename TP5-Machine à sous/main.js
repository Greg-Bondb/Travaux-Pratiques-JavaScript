let sub = document.getElementsByClassName('submit');
let rep;
let ran = [];
let i = 0;
let jeton = document.getElementById("jeton");
jeton.innerHTML = 500;

var dict = {
    0:"img/lemon.png",
    1:"img/lemon.png",
    2:"img/cherry.png",
    3:"img/cherry.png",
    4:"img/diamond.png",
    5:"img/diamond.png",
    6:"img/casino.png",
}

Array.from(sub).forEach((item) => {
    item.addEventListener('click', function() {
        casino();
    })
})

function casino() { 
    rep = parseInt(document.querySelector("input[name=radio]:checked").value);
    jeton.innerHTML = parseInt(jeton.innerHTML) - rep;
    let y = 0;
    Time()
    document.querySelectorAll("img.picture").forEach(element =>{ 
        ran[y] = dict[Math.floor(Math.random() * (7))];
        element.src = ran[y];
        y++
    });
    // ajoute le gain si win
    let count = ran.filter(x => x == "img/diamond.png").length;
    if (ran[0] == ran[1] && ran[1] == ran[2]) {
        if (ran[0] == "img/lemon.png") {
            jeton.innerHTML = parseInt(jeton.innerHTML) + (rep*1.25);
            document.getElementById("reponse").innerHTML = "Vous avez gagné " + rep*1.25 + " jetons !";
        } else if (ran[0] == "img/cherry.png") {
            jeton.innerHTML = parseInt(jeton.innerHTML) + (rep*1.50);
            document.getElementById("reponse").innerHTML = "Vous avez gagné " + rep*1.50 + " jetons !";
        } else if (ran[0] == "img/diamond.png") {
            jeton.innerHTML = parseInt(jeton.innerHTML) + (rep*2.50);
            document.getElementById("reponse").innerHTML = "Vous avez gagné " + rep*2.50 + " jetons !";
        } else {
            jeton.innerHTML = parseInt(jeton.innerHTML) + (rep*10);
            document.getElementById("reponse").innerHTML = "Vous avez gagné " + rep*10 + " jetons !";
        }
    } else if (count == 2) {
        jeton.innerHTML = parseInt(jeton.innerHTML) + rep;
        document.getElementById("reponse").innerHTML = "Vous avez gagné " + rep + " jetons !";
    } else if (count == 1) {
        jeton.innerHTML = parseInt(jeton.innerHTML) + (rep/2);
        document.getElementById("reponse").innerHTML = "Vous avez gagné " + rep/2 + " jetons !";
    } else {
        document.getElementById("reponse").innerHTML = "Vous avez perdu votre mise :(";
    }
    // vérification de nombre de jeton 
    if (parseInt(jeton.innerHTML) < 200) {
        document.getElementById("1").style.display="none";
    }
    if (parseInt(jeton.innerHTML) < 50) {
        document.getElementById("2").style.display="none";
    }
    if (parseInt(jeton.innerHTML) < 10) {
        document.getElementById("3").style.display="none";
        document.getElementById("sub").style.display="none";
        document.getElementById("reponse").innerHTML = "Vous n'avez plus de jetons :(";
    }
    if (parseInt(jeton.innerHTML) < 0) {
        jeton.innerHTML = 0;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Time() {
    for (let i = 0; i < 10; i++) {
        document.querySelectorAll("img.picture").forEach(element =>{ 
            element.src = dict[Math.floor(Math.random() * (7))];
        });
        await sleep(i * 5);
    }
}