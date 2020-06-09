class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }


    populateUI(data) {
        //de-structure vars

        //add them to inner HTML

        this.uiContainer.innerHTML = `

        <div class="row">
    <div class="col s12 m6 offset-m3">
      <div class="card blue-grey darken-1 center">
        <div class="card-content white-text amber darken-2">
          <span class="card-title">${data.name}</span>
          <p class="">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</p>
          <p>Weather conditions are described as ${data.weather[0].description}</p>
        </div>
      </div>
    </div>
  </div>
 
        `;
    }
}