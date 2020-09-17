
function getWeather(name) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=antwerp&units=metric&appid=cadd248e697a9b875b9e032e97f46074")
        .then(response => response.json())
        .then(json => console.log(json))//actual JSON data as parameter //hier moet mijn functie komen die de data gaat tonen op het scherm
        .catch(err => console.error(err));
}

document.getElementById("press").addEventListener("click", function  () {
    let input = document.getElementById("cityinput").value;
    getWeather(input)

});


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

// fetch of pokemon fetch("https://pokeapi.co/api/v2/pokemon/"+id)








// do I need to use submit (submit form) as an Event (listener