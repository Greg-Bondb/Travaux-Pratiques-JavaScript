let img = document.getElementsByClassName('block');
let active = document.getElementsByClassName('active');
let direction = document.getElementsByClassName('direction');
let radio = document.getElementsByClassName('radio')
let y = 0;
var id = null;

Array.from(direction).forEach((item) => {
    item.addEventListener('click', function() {
        translation(item.dataset.sens);
    })
})

Array.from(radio).forEach((item) => {
    item.addEventListener('click', function() {
        row(item.dataset.row);
    })
})

function translation(arg) {
    time2(arg);
    time(arg);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function time(arg) {
    await sleep(200);
    range(arg)
}

async function time2(arg) {
    await sleep(50);
    myMove(arg);
}

function myMove(arg) { 
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 250) {
        clearInterval(id);
        } else {
            pos += 50;
            if (arg === "next") {
                img[y].style.left = pos + 'px';
                img[y].style.right = -pos + 'px';
            } else if (arg === "previous") {
                img[y].style.right = pos + 'px';
                img[y].style.left = -pos + 'px'; 
            }
        }
    }
    reset()
}

async function reset() {
    await sleep(200);
    Array.from(img).forEach(function(item) {
        item.style.left = 0;
        item.style.right = 0;
    })
}

function range(arg) {
    Array.from(active).forEach(function(item) {
        item.classList.remove('active');
    })
    if (arg === "next" && y !== img.length-1) {
        y += 1;
    } else if (arg ==="previous" && y !== 0){
        y -= 1;
    } else if (y === 0) {
        y = img.length-1;
    } else {
        y = 0;
    }
    img[y].classList.add('active');
    Array.from(radio).forEach(function(item) {
        item.classList.remove('hvr');
    })
    radio[y].classList.add('hvr')
}

function row(arg) {
    Array.from(active).forEach(function(item) {
        item.classList.remove('active');
    })
    y = parseInt(arg);
    img[y].classList.add('active');
    Array.from(radio).forEach(function(item) {
        item.classList.remove('hvr');
    })
    radio[y].classList.add('hvr')
}
