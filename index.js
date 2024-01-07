const apiKey = "f38723a34f4747c9a92154330240701";
const City = document.querySelector(".search input");


async function getWeather(city){
    const apiUrl = ` http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`;
    const resp = await fetch(apiUrl);
    var data = await resp.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_f) + "°F";
    document.querySelector(".precipitation").innerHTML = data.current.precip_in + "%"
    document.querySelector(".wind").innerHTML = data.current.wind_mph + "MPH";

}

const btn = document.querySelector(".search button");
btn.addEventListener("click",() => {
    getWeather(City.value);
})






























