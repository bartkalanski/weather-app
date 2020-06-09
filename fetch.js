class Fetch {
    async getCurrent(input) {
        const myKey = "4b6cf509d03a1b8051c930ccfb7c330d";

        //make request to url

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;

    }
}