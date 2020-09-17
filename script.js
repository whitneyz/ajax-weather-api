
function getWeather(name) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+name+"&units=metric&appid=cadd248e697a9b875b9e032e97f46074")
        .then(response => response.json())
        .then(json => whitney(json))//actual JSON data as parameter //hier moet mijn functie komen die de data gaat tonen op het scherm
        .catch(err => console.error(err));
}

async function whitney(json) {

    let i = 0;
    let timeNow =
    for (i=0; i < 8; i++){
        console.log(json.list[i].main.temp);
    }
    //let temp = await whitney();
   // let array = temp(json) aan Bert vragen of kan ik min & max temp gebruiken
    //let city =

   // let displayHtml = document.getElementById("temp1").value;
    //whitney(displayHtml);

}

document.getElementById("press").addEventListener("click", function  () {
    let input = document.getElementById("cityinput").value;
    getWeather(input);

});

// average temp=(temp_min + temp_max) / 2

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

// fetch of pokemon fetch("https://pokeapi.co/api/v2/pokemon/"+id)

// for the temp response.data["list"][i]["main"]["temp"]






// do I need to use submit (submit form) as an Event (listener