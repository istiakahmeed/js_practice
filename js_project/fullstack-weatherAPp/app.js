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

const API_KEY = "7d96f0977a74a291a8d9db8fee61c9dc";
const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}";
const ICON_URL = "https://openweathermap.org/img/wn/";
