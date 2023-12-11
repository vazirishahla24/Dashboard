const weather = document.querySelector(".weather");

const format = (number) => {
    let x = Math.trunc(number);
    return new Number(x).toLocaleString('fa-ir');
}

const fetchWeather = async() => {
    try {
        const response = await fetch(`https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light`);
        const data = await response.json();

        weather.innerHTML +=
            `<div class="d-flex align-center">
                <img src="assets/Images/1.png">
                <h1>${format(data[0].current)}°</h1>
            </div>
            <h3 class="direction-rtl">${data[0].customDescription.text} ${data[0].customDescription.emoji}</h3>
            <p>
                <span>حداقل ${format(data[0].min)}</span>
                <span>حداکثر ${format(data[0].max)} </span>
            </p>
            <div>
                <select class="direction-rtl">
                    <option value="">پیش بینی</option>
                </select>
            </div>`;

    } catch (error) {
        console.log(error);
    }
};

fetchWeather();