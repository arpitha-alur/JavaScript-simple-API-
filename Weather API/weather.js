class Weather {
  constructor(city,country_code){
    this.apiKey = "d579eee50f7dc49c1570f676066da302";
    this.city = city;
    this.country_code = country_code;
  }

  async getWeather(){
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country_code
      }&APPID=${this.apiKey}`);

      const responseData = await response.json();
      return responseData;
  }

  changeLocation(city,country_code)
  {
    this.city = city;
    this.country_code = country_code;
  }
}