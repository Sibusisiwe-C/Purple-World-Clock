function updateTime() {
  let durbanElement = document.querySelector("#durban");
  if (durbanElement) {
    let durbanDateElement = durbanElement.querySelector(".date");
    let durbanTimeElement = durbanElement.querySelector(".time");
    let durbanTime = moment().tz("Africa/Johannesburg");

    durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");
    durbanTimeElement.innerHTML = durbanTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let capetownElement = document.querySelector("#capetown");
  if (capetownElement) {
    let capetownDateElement = capetownElement.querySelector(".date");
    let capetownTimeElement = capetownElement.querySelector(".time");
    let capetownTime = moment().tz("Africa/Johannesburg");

    capetownDateElement.innerHTML = capetownTime.format("MMMM Do YYYY");
    capetownTimeElement.innerHTML = capetownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  if (cityTimeZone === "") {
    return;
  }
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
