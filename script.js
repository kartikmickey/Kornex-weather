console.log("Starting")

// d71ad3bc2d410065a426e3045fa8bf2e

let xhr = new XMLHttpRequest();
let obj;

let weather = document.getElementById("weather");

weather.addEventListener("change", ()=>{
    let value = weather.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&limit=5&appid=d71ad3bc2d410065a426e3045fa8bf2e`;
    // let url = "api.openweathermap.org/data/2.5/forecast?lat=10.75&lon=106.6667&limit=5&appid=d71ad3bc2d410065a426e3045fa8bf2e"
    
    console.log(weather.value);
    xhr.open("GET", url , true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let responseData = JSON.parse(xhr.responseText);
            obj = responseData;
            console.log(responseData.main);
            document.getElementById("cur").innerHTML =`${((responseData.main.feels_like)/25).toFixed(1)}<sup>o</sup>C`
            document.getElementById("cur1").innerHTML =`${((responseData.main.temp)/25).toFixed(1)}<sup>o</sup>C`
            document.getElementById("cur2").innerHTML =`${((responseData.main.temp_max)/25).toFixed(1)}<sup>o</sup>C`
            document.getElementById("cur3").innerHTML =`${((responseData.main.
                temp_min)/25).toFixed(1)}<sup>o</sup>C`
            
        }
    }
    xhr.send();
    console.log(obj);
})
