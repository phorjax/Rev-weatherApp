const apiKey = "b618bc00683b307c06d1c5fde63d8828";
const City = document.querySelector(".search input");


async function getWeather(city){
    const apiUrl = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    const resp = await fetch(apiUrl);
    var data = await resp.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "MPH";

}

const btn = document.querySelector(".search button");
btn.addEventListener("click",() => {
    getWeather(City.value);
})






























