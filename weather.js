export const getWeather = async city => {
    // TODO: using async/await, fetch the correct url depending on city and call showTemperature with the temperature
const response = await fetch (`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`)
const data = await response.json();
showTemperature(data.current.temperature);

}

// Do NOT modify the code below
const result = document.querySelector("#result");
const showTemperature = temperature => {
    result.textContent = `It's ${temperature} degrees celsius.`;
}
