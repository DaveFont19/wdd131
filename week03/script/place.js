
function calculateWindChill (t, w){
    const wind = 13.12 + 0.6215 * (t) - 11.37 * (w) ** 0.16 + 0.3965 * (t) * (w) ** 0.16
    return wind.toFixed(1);
}
const temperature = parseInt(document.getElementById("temperature").innerHTML);
const windSpeed = parseInt(document.getElementById("windSpeed").innerHTML);
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChill").innerHTML = windChill;
const year = document.querySelector("#year");
let oLastModif = new Date(document.lastModified);
year.innerHTML = `<span class="highlight">${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}</span>`;
