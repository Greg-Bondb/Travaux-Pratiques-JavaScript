/*let boutton = document.getElementById('callweather');
let input = document.getElementById('queryLoc').value;

boutton.addEventListener('click', function(){
  let city = input.innerText;
  loadNames(city)
})

async function loadNames(arg) {
  const response = fetch("https://api.openweathermap.org/data/2.5/weather?q="+arg+"&appid=187129f8ffc705a0412d546119086d08");
  const names = response.json();
  console.log(names.name); 
  console.log(`${Math.round(names.main.temp-273.15)} °C`) 
}*/

let boutton = document.getElementById('callweather');
let input = document.getElementById('queryLoc');
let meteo = document.getElementById('')


boutton.addEventListener('click', function(){
  let city = input.value;
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=187129f8ffc705a0412d546119086d08")
  .then(response => {
    return response.json()
  })
  .then(data => {
    let meteoroad = data.weather[0].icon;
    console.log(meteoroad)
    console.log(data.name)
    console.log(Math.round(data.main.temp-273.15) + "°C")
    let image = document.querySelector('img')
    image.src = 'http://openweathermap.org/img/wn/'+ meteoroad +'.png'
    let temp = document.querySelector('h1')
    temp.innerHTML = Math.round(data.main.temp-273.15) + "°C"
    let ville = document.querySelector('h2')
    ville.innerHTML = data.name
  })
  .catch(error => {
    console.log("erreur : " + error);
  });
});




 /* let boutton = document.getElementById('callweather');
let input = document.getElementById('queryLoc');

boutton.addEventListener('click', function(){
  let city = input.value;
  fetch("https://countriesnow.space/api/v0.1/countries/population/cities?city="+city)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("erreur : " + error);
  });
});*/

/*var searchInput = document.getElementById('searchInput');
        
        searchInput.addEventListener('keyup', function() {
            var input = searchInput.value;

            for (i = 0; i < divs.length; i++) {
                if(divs[i].getAttribute('data-title').toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                    divs[i].style.display = 'flex';
                }
                else {
                    divs[i].style.display = 'none';
                }
            }
    })

    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"

    console.log("")*/