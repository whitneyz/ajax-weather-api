function getWeather(name) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&units=metric&appid=cadd248e697a9b875b9e032e97f46074")
        .then(response => response.json())
        .then(json => whitney(json))//actual JSON data as parameter //hier moet mijn functie komen die de data gaat tonen op het scherm
        .catch(err => console.error(err));
}

async function whitney(json) { //temp info date is today temp1

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
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    } else if (h >= 3 && h < 6) {
        for (i = 0; i < 7; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/7;
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    } else if (h >= 6 && h < 9) {
        for (i = 0; i < 6; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/6;
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    } else if (h >= 9 && h < 12) {
        for (i = 0; i < 5; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/5;
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    } else if (h >= 12 && h < 15) {
        for (i = 0; i < 4; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/4;
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
        //console.log(aveTemp);
    } else if (h >= 15 && h < 18) {
        for (i = 0; i < 3; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/3;
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    } else if (h >= 18 && h < 21) {
        for (i = 0; i < 2; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp= aveTemp/2;
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    } else {
        for (i = 0; i < 1; i++) {
            console.log(json.list[i].main.temp);
            aveTemp += json.list[i].main.temp;
        }
        aveTemp;
        //console.log(aveTemp);
        document.getElementById("temp1").innerHTML = aveTemp.toFixed();
    }
    console.log(i);//how much blocks of temp are visible
}

//temp day2 i= 4-12

//temp day3 i= 13-21

//temp day4 i= 22-30

// temp day5 i= 31-39



document.getElementById("press").addEventListener("click", function () {
    let input = document.getElementById("cityinput").value;
    getWeather(input);

});


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

// for the temp response.data["list"][i]["main"]["temp"]

// i= hoeveel blokken met temp er nog op de dag komen i=3 bijv dan nog 3 verschillende temp tussen 15.00 en 23.59

//todo: hide API key, automatically change dates of the week, code to forcast days 2 untill 5 i
//todo: see also notion comments


