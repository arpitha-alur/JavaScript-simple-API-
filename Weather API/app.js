const storage = new Storage();
const ui = new UI();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country_code);

const getWeather = () => {
  weather.getWeather()
  .then(res=> {
    ui.paint(res);
    console.log(res);
  })
  .catch(error => console.log(error));
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById("w-change-btn").addEventListener("click",() => {
  const changeCity = document.getElementById("city").value;
  const changeCountry = document.getElementById("country").value;
 
  weather.changeLocation(changeCity,changeCountry);

  storage.setLocationData(changeCity,changeCountry);

  getWeather();

  $("#locModal").modal("hide");
});

const convertKelvinToFahrenheit = kelvin => {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    let myCelcius = 0;
    let myCelciusRounded = 0;
    let myFahrenheit = 0;

    myCelcius = kelvin - 273.15;
    myCelciusRounded = Math.round(myCelcius);
    myFahrenheit = myCelciusRounded * (9 / 5) + 32;
    return myFahrenheit;
  }
};

// conversion
const MetresPerSecondToMilesPerHour = mps => {
  let milesPerSecond = 0;
  let milesPerHour = 0;
  let milesPerHourRounded = 0;

  milesPerSecond = mps / 1609.34;
  milesPerHour = milesPerSecond * 3600;
  milesPerHourRounded = Math.round(milesPerHour);
  return milesPerHourRounded;
};
