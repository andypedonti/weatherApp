function getData() {
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
    })
    .catch(function (error) {});
}
