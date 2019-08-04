class Storage {
  constructor() {
    this.city;
    this.country_code;
    this.defaultCity = "London";
    this.defaultCountry = "uk";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("country_code") === null) {
      this.country_code = this.defaultCountry;
    } else {
      this.country_code = localStorage.getItem("country_code");
    }
    return {
      city: this.city,
      country_code: this.country_code
    };
  }

  setLocationData(city, country_code) {
    // no need to parse data since they are strings
    localStorage.setItem("city", city);
    localStorage.setItem("country_code", country_code);
  }
}