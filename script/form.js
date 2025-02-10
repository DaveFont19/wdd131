function iterateOptions(products) {
    const select = document.getElementById("product-name");
    products.forEach(element => {
        let option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.name;
        select.appendChild(option);
    });
}
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function visits() {
    const value = localStorage.getItem('counter');
    if (value == null) {
        localStorage.setItem('counter', '1')
    } else {
        let number = Number(value);
        number++;
        localStorage.setItem('counter', number);
    }
}
const year = document.querySelector("#year");
let oLastModif = new Date(document.lastModified);
year.innerHTML = `<span class="highlight">${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}</span>`;
iterateOptions(products);

const button = document.getElementById('button');
button.addEventListener("click", visits);
