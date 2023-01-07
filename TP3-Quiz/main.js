let question = document.getElementsByClassName('c');
let sub = document.getElementsByClassName('submit');
let active = document.getElementsByClassName('active');
let tab = [];
let rep;
let y = 0;
let compteur = 0;

let resultat = document.getElementsByClassName('result')
let result = document.createElement("p")
result.innerText= "salut t'as gagné"
resultat.result


Array.from(sub).forEach((item) => {
    item.addEventListener('click', function() {
        submit();
    })
})

function submit() {
    reponse = "input[name=reponse" + (y+1) + "]:checked";
    typeid = parseInt(document.querySelector(reponse).id);
    if (typeid == 2) {
        var all = document.querySelectorAll(reponse);
        rep = 0;
        all.forEach(element => {
            rep += element.value;
        })
    } else {
        rep = parseInt(document.querySelector(reponse).value);
    }
    tab.push(rep);

    Array.from(active).forEach(function(item) {
        item.classList.remove('active');
    })
    question[y+1].classList.add('active');
    y += 1;
    if (y == 5) {
        verif()
    }
}

function verif() {
    if (tab[0]==2) {
        compteur++
    }
    if (tab[1]==24) {
        compteur++
    }
    if (tab[2]==1) {
        compteur++
    }
    if (tab[3]==134) {
        compteur++
    }
    if (tab[4]==3) {
        compteur++
    }
    console.log(compteur);
    document.getElementById("compteur").innerHTML = compteur;
    Array.from(sub).forEach((item) => {
        item.classList.remove('submit');
    })
}