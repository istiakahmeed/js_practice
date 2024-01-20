const condition = document.getElementById("condition");
const city = document.getElementById("city");
const country = document.getElementById("country");
const mainText = document.getElementById("main");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");

const cityInput = document.getElementById("city-input");
const historyElm = document.getElementById("history");
const masterHistory = document.getElementById("master-history");

const API_KEY = "3c9af9a9e96abb7a8e1e5a72620142b0";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid={API_KEY}
`;
const ICON_URL = "https://openweathermap.org/img/w/";
const DEFAULT_CITY = "kushtia,bd";
window.onload = function () {
  navigator.geolocation.getCurrentPosition(
    (s) => {
      getWeatherData(null, s.coords);
    },
    (e) => {
      getWeatherData();
    }
  );

  axios
    .get("/api/history")
    .then(({ data }) => {
      if (data.length > 0) {
        updateHistory(data);
      } else {
        historyElm.innerHTML = "There is No History";
      }
    })
    .catch((e) => {
      console.log(e);
      alert("Error Occurred");
    });

  cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (e.target.value) {
        getWeatherData(e.target.value, null, (weather) => {
          e.target.value = "";
          axios
            .post("/api/history", weather)
            .then(({ data }) => updateHistory(data))
            .catch((e) => {
              console.log(e);
              alert("Error Occurred");
            });
        });
      } else {
        alert("Please Enter a Valid City Name");
      }
    }
  });
};

function getWeatherData(city = DEFAULT_CITY, coords, cb) {
  let url = BASE_URL;

  city === null
    ? (url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}`)
    : (url = `${url}&q=${city}`);

  axios
    .get(url)
    .then(({ data }) => {
      let weather = {
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };

      setWeather(weather);
      if (cb) cb(weather);
    })
    .catch((e) => {
      console.log(e);
      alert("City Not Found");
    });
}

function setWeather(weather) {
  condition.src = `${ICON_URL}${weather.icon}.png`;
  city.innerHTML = weather.name;
  country.innerHTML = weather.country;
  mainText.innerHTML = weather.main;
  description.innerHTML = weather.description;
  temp.innerHTML = weather.temp;
  pressure.innerHTML = weather.pressure;
  humidity.innerHTML = weather.humidity;
}
