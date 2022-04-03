const submitButton = document.getElementById("submitButton");
const getOutput = document.getElementById("getOutput");
const mainWeather = document.getElementById("mainWeather");
const cityName = document.getElementById("cityName");

const temp = document.getElementById("temp");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const temp_feels = document.getElementById("temp_feels");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");

const dayDateMonth = document.getElementById("dayDateMonth");

const getDateDayMonth = () => {
  const d = new Date();
  const monthInd = d.getMonth();
  const monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const currMonth = monthArr[monthInd];

  const date = d.getDate();

  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayInd = d.getDay();
  const presentDay = daysArr[dayInd];

  dayDateMonth.innerText = `${presentDay}, ${date} ${currMonth}`;
};

getDateDayMonth();

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const cityNameVal = cityName.value;

  if (cityNameVal === "") {
    mainWeather.style.display = "none";
    getOutput.classList.remove("heading");
    getOutput.innerText = "Please write the name of your city before search!";
  } else {
    try {
      let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameVal}&units=metric&appid=f04d739e5497825c960c744a34ab6772`;
      const res = await fetch(weatherURL); // fetching the data
      const resData = await res.json(); // converting to json
      const arrData = [resData]; // array of obj

      mainWeather.style.display = "block";
      mainWeather.style.display = "flex";

      getOutput.classList.add("heading");

      const yourCityName = arrData[0].name;
      const yourCountryName = arrData[0].sys.country;

      getOutput.innerText = `Weather condition in ${yourCityName}, ${yourCountryName}`;

      temp.innerText = arrData[0].main.temp;
      temp_feels.innerText = arrData[0].main.feels_like;
      min_temp.innerText = arrData[0].main.temp_min;
      max_temp.innerText = arrData[0].main.temp_max;
      pressure.innerText = arrData[0].main.pressure;
      humidity.innerText = arrData[0].main.humidity;
      windSpeed.innerText = arrData[0].wind.speed;
    } catch (err) {
      mainWeather.style.display = "none";
      getOutput.classList.remove("heading");
      getOutput.innerText = "Please write the name of your city properly!";
    }
  }
});
