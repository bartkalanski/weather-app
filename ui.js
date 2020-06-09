class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }


    populateUI(data) {
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon;
        let colour;
        data.main.temp < 10 ? colour = 'blue' : colour = 'yellow darken-2';

        this.uiContainer.innerHTML = `

        <div class="row">
    <div class="col s12 m6 offset-m3">
      <div class="card blue-grey darken-1 center">
        <div class="card-content white-text ${colour}">
          <span class="card-title">${data.name}</span>
          <p class="">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</p>
          <p>Weather conditions are described as ${data.weather[0].description}</p>
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="thunderstorm">
        </div>
      </div>
    </div>
  </div>`;


    }
}