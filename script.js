$("#locationSearch").click(function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition);
  }
  updateDay();
  function setPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);

    let url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude&appid=021e0ef373e6b3285caac8c9e9b52544";

    $.ajax({
      url: url,
      method: "GET",
    })
      .then(function (responce) {
        console.log(responce);

        let otherUrl = `http://openweathermap.org/img/wn/${responce.current.weather[0].icon}@2x.png`;
        let imageElement = $("<img>").attr("src", otherUrl);
        $(".weatherIcon").append(imageElement);
        let url1 = `http://openweathermap.org/img/wn/${responce.daily[1].weather[0].icon}@2x.png`;
        let url2 = `http://openweathermap.org/img/wn/${responce.daily[2].weather[0].icon}@2x.png`;
        let url3 = `http://openweathermap.org/img/wn/${responce.daily[3].weather[0].icon}@2x.png`;
        let url4 = `http://openweathermap.org/img/wn/${responce.daily[4].weather[0].icon}@2x.png`;
        let url5 = `http://openweathermap.org/img/wn/${responce.daily[5].weather[0].icon}@2x.png`;
        let imageElement1 = $("<img>").attr("src", url1);
        let imageElement2 = $("<img>").attr("src", url2);
        let imageElement3 = $("<img>").attr("src", url3);
        let imageElement4 = $("<img>").attr("src", url4);
        let imageElement5 = $("<img>").attr("src", url5);
        $(".icon1").append(imageElement1);
        $(".icon2").append(imageElement2);
        $(".icon3").append(imageElement3);
        $(".icon4").append(imageElement4);
        $(".icon5").append(imageElement5);

        var tempF = (responce.current.temp - 273.15) * 1.8 + 32;
        $(".temperature-value").text("Temperature (F): " + tempF.toFixed(2));
        $(".humidity").text("Humidity: " + responce.current.humidity);
        $(".windSpeed").text("Wind Speed: " + responce.current.wind_speed);
        $(".description").text(responce.current.weather[0].description);
        var d1High = (responce.daily[1].temp.max - 273.15) * 1.8 + 32;
        var d1Low = (responce.daily[1].temp.min - 273.15) * 1.8 + 32;
        $(".day1High").text("High: " + d1High.toFixed(1) + "°F");
        $(".day1Low").text("Low: " + d1Low.toFixed(1) + "°F");
        $(".day1Description").text(responce.daily[1].weather[0].description);
        var d2High = (responce.daily[2].temp.max - 273.15) * 1.8 + 32;
        var d2Low = (responce.daily[2].temp.min - 273.15) * 1.8 + 32;
        $(".day2High").text("High: " + d2High.toFixed(1) + "°F");
        $(".day2Low").text("low: " + d2Low.toFixed(1) + "°F");
        $(".day2Description").text(responce.daily[2].weather[0].description);
        var d3High = (responce.daily[3].temp.max - 273.15) * 1.8 + 32;
        var d3Low = (responce.daily[3].temp.min - 273.15) * 1.8 + 32;
        $(".day3High").text("High: " + d3High.toFixed(1) + "°F");
        $(".day3Low").text("low: " + d3Low.toFixed(1) + "°F");
        $(".day3Description").text(responce.daily[3].weather[0].description);
        var d4High = (responce.daily[4].temp.max - 273.15) * 1.8 + 32;
        var d4Low = (responce.daily[4].temp.min - 273.15) * 1.8 + 32;
        $(".day4High").text("High: " + d4High.toFixed(1) + "°F");
        $(".day4Low").text("low: " + d4Low.toFixed(1) + "°F");
        $(".day4Description").text(responce.daily[4].weather[0].description);
        var d5High = (responce.daily[5].temp.max - 273.15) * 1.8 + 32;
        var d5Low = (responce.daily[5].temp.min - 273.15) * 1.8 + 32;
        $(".day5High").text("High: " + d5High.toFixed(1) + "°F");
        $(".day5Low").text("low: " + d5Low.toFixed(1) + "°F");
        $(".day5Description").text(responce.daily[5].weather[0].description);

        const day = document.getElementById("day");
        const dayOne = document.getElementById("day1");
        const dayTwo = document.getElementById("day2");
        const dayThree = document.getElementById("day3");
        const dayFour = document.getElementById("day4");
        const dayFive = document.getElementById("day5");
      })

      .catch(function (error) {});
  }
});

$("#citySearch").click(function () {
  console.log("you clicked city search");
  function citySearch() {
    let city = document.getElementById("search").value;
    console.log(city);
  }
  citySearch();

  let city = document.getElementById("search").value;

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=021e0ef373e6b3285caac8c9e9b52544";

  $.ajax({
    url: url,
    method: "GET",
  }).then(function (responce) {
    console.log(responce);
    let lat = responce.coord.lat;
    let lon = responce.coord.lon;
    console.log(lat);
    console.log(lon);
    let url6 =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude&appid=021e0ef373e6b3285caac8c9e9b52544";
    $.ajax({
      url: url6,
      method: "GET",
    }).then(function (responce) {
      console.log(responce);
      updateDay();
      let otherUrl = `http://openweathermap.org/img/wn/${responce.current.weather[0].icon}@2x.png`;
      let imageElement = $("<img>").attr("src", otherUrl);
      $(".weatherIcon").append(imageElement);
      let url1 = `http://openweathermap.org/img/wn/${responce.daily[1].weather[0].icon}@2x.png`;
      let url2 = `http://openweathermap.org/img/wn/${responce.daily[2].weather[0].icon}@2x.png`;
      let url3 = `http://openweathermap.org/img/wn/${responce.daily[3].weather[0].icon}@2x.png`;
      let url4 = `http://openweathermap.org/img/wn/${responce.daily[4].weather[0].icon}@2x.png`;
      let url5 = `http://openweathermap.org/img/wn/${responce.daily[5].weather[0].icon}@2x.png`;
      let imageElement1 = $("<img>").attr("src", url1);
      let imageElement2 = $("<img>").attr("src", url2);
      let imageElement3 = $("<img>").attr("src", url3);
      let imageElement4 = $("<img>").attr("src", url4);
      let imageElement5 = $("<img>").attr("src", url5);
      $(".icon1").append(imageElement1);
      $(".icon2").append(imageElement2);
      $(".icon3").append(imageElement3);
      $(".icon4").append(imageElement4);
      $(".icon5").append(imageElement5);

      var tempF = (responce.current.temp - 273.15) * 1.8 + 32;
      $(".temperature-value").text("Temperature (F): " + tempF.toFixed(2));
      $(".humidity").text("Humidity: " + responce.current.humidity);
      $(".windSpeed").text("Wind Speed: " + responce.current.wind_speed);
      $(".description").text(responce.current.weather[0].description);
      var d1High = (responce.daily[1].temp.max - 273.15) * 1.8 + 32;
      var d1Low = (responce.daily[1].temp.min - 273.15) * 1.8 + 32;
      $(".day1High").text("High: " + d1High.toFixed(1) + "°F");
      $(".day1Low").text("Low: " + d1Low.toFixed(1) + "°F");
      $(".day1Description").text(responce.daily[1].weather[0].description);
      var d2High = (responce.daily[2].temp.max - 273.15) * 1.8 + 32;
      var d2Low = (responce.daily[2].temp.min - 273.15) * 1.8 + 32;
      $(".day2High").text("High: " + d2High.toFixed(1) + "°F");
      $(".day2Low").text("low: " + d2Low.toFixed(1) + "°F");
      $(".day2Description").text(responce.daily[2].weather[0].description);
      var d3High = (responce.daily[3].temp.max - 273.15) * 1.8 + 32;
      var d3Low = (responce.daily[3].temp.min - 273.15) * 1.8 + 32;
      $(".day3High").text("High: " + d3High.toFixed(1) + "°F");
      $(".day3Low").text("low: " + d3Low.toFixed(1) + "°F");
      $(".day3Description").text(responce.daily[3].weather[0].description);
      var d4High = (responce.daily[4].temp.max - 273.15) * 1.8 + 32;
      var d4Low = (responce.daily[4].temp.min - 273.15) * 1.8 + 32;
      $(".day4High").text("High: " + d4High.toFixed(1) + "°F");
      $(".day4Low").text("low: " + d4Low.toFixed(1) + "°F");
      $(".day4Description").text(responce.daily[4].weather[0].description);
      var d5High = (responce.daily[5].temp.max - 273.15) * 1.8 + 32;
      var d5Low = (responce.daily[5].temp.min - 273.15) * 1.8 + 32;
      $(".day5High").text("High: " + d5High.toFixed(1) + "°F");
      $(".day5Low").text("low: " + d5Low.toFixed(1) + "°F");
      $(".day5Description").text(responce.daily[5].weather[0].description);
    });
  });

  function postCity() {
    let storage = JSON.parse(getStor()) || [];
    let city = document.getElementById("search").value;
    let objectStorage = {
      city,
    };
    storage.push(objectStorage);
    localStorage.setItem(city, JSON.stringify(storage));
    //let div = document.createTextNode(city);
    //postScore.appendChild(postCity);
  }

  postCity();
  getStor();
  function getStor() {
    return localStorage.getItem(city);
  }
});
function updateDay() {
  const now = moment();
  const peopleReadable = now.format("dddd:hh:mma");
  day.textContent = peopleReadable;
  console.log(peopleReadable);
  const dayOnepr = moment().add(1, "days");
  const dayOnePeopleReadable = dayOnepr.format("dddd: MMM: D");
  day1.textContent = dayOnePeopleReadable;
  const daytwopr = moment().add(2, "days");
  const dayTwoPeopleReadable = daytwopr.format("dddd: MMM: D");
  day2.textContent = dayTwoPeopleReadable;
  const dayThreepr = moment().add(3, "days");
  const dayThreePeopleReadable = dayThreepr.format("dddd: MMM: D");
  day3.textContent = dayThreePeopleReadable;
  const dayFourpr = moment().add(4, "days");
  const dayFourPeopleReadable = dayFourpr.format("dddd: MMM: D");
  day4.textContent = dayFourPeopleReadable;
  const dayFivepr = moment().add(5, "days");
  const dayFivePeopleReadable = dayFivepr.format("dddd: MMM: D");
  day5.textContent = dayFivePeopleReadable;
}
