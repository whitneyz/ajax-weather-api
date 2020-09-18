function getWeather(name) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&units=metric&appid=cadd248e697a9b875b9e032e97f46074")
        .then(response => response.json())
        .then(json => whitney(json))//actual JSON data as parameter //hier moet mijn functie komen die de data gaat tonen op het scherm
        .catch(err => console.error(err));
}

async function whitney(json) {

    let i = 0;
    var d = new Date();
    var h = d.getHours();
    var aveTemp = 0;

    if (h >= 0 && h < 3) {
        for (i = 0; i < 8; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/8;
        console.log(aveTemp);
        // todo: weergave in html
    } else if (h >= 3 && h < 6) {
        for (i = 0; i < 7; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/7;
        console.log(aveTemp);
        // todo: weergave in html
    } else if (h >= 6 && h < 9) {
        for (i = 0; i < 6; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/6;
        console.log(aveTemp);
        // todo: weergave in html
    } else if (h >= 9 && h < 12) {
        for (i = 0; i < 5; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/5;
        console.log(aveTemp);
        // todo: weergave in html
    } else if (h >= 12 && h < 15) {
        for (i = 0; i < 4; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/4;
        console.log(aveTemp);
        // todo: weergave in html
    } else if (h >= 15 && h < 18) {
        for (i = 0; i < 3; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/3;
        console.log(aveTemp);
        // todo: weergave in html
    } else if (h >= 18 && h < 21) {
        for (i = 0; i < 2; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/2;
        console.log(aveTemp);
        // todo: weergave in html
    } else {
        for (i = 0; i < 1; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/1;
        console.log(aveTemp);
        // todo: weergave in html
    }
}

document.getElementById("press").addEventListener("click", function () {
    let input = document.getElementById("cityinput").value;
    getWeather(input);

});


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

// for the temp response.data["list"][i]["main"]["temp"]

