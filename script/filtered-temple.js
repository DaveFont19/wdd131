function displayHome(t){
  t.forEach(temple => {
    const figure = document.createElement("figure");
    
    const imgElement =document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.templeName;
    imgElement.loading = "lazy";

    const figureCaption = document.createElement("figcaption");
    figureCaption.textContent = temple.templeName;

    const location = document.createElement("label");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("label");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const size = document.createElement("label");
    size.textContent = `Size: ${temple.area} sq ft`

    figure.appendChild(figureCaption);
    figure.appendChild(location);
    figure.appendChild(dedicated);
    figure.appendChild(size);
    figure.appendChild(imgElement);

    containMain.appendChild(figure);
  });
}
function filterOld(){
  const title = document.querySelector(".title");
  title.textContent = "Old"
  const figuresImg = document.querySelectorAll("figure")
  figuresImg.forEach((image) =>{
    image.remove();
  })
  const oldTemples = []
  temples.forEach(temple => {
    const dedicate = temple.dedicated.split(",");
    const number = parseInt(dedicate[0]);
    if (number <= 1900){
      oldTemples.push(temple)
    }
  });
  displayHome(oldTemples);
}
function filterNew(){
  const title = document.querySelector(".title");
  title.textContent = "New"
  const figuresImg = document.querySelectorAll("figure")
  figuresImg.forEach((image) =>{
    image.remove();
  })
  const newTemples = []
  temples.forEach(temple => {
    const dedicate = temple.dedicated.split(",");
    const number = parseInt(dedicate[0]);
    if (number >= 2000){
      newTemples.push(temple)
    }
  });
  displayHome(newTemples);
}
function large(){
  const title = document.querySelector(".title");
  title.textContent = "Large"
  const figuresImg = document.querySelectorAll("figure")
  figuresImg.forEach((image) =>{
    image.remove();
  })
  const lgrTemples = []
  temples.forEach(temple => {
    const number =temple.area;
    if (number >= 90000){
      lgrTemples.push(temple)
    }
  });
  displayHome(lgrTemples);
}
function small(){
  const title = document.querySelector(".title");
  title.textContent = "Small"
  const figuresImg = document.querySelectorAll("figure")
  figuresImg.forEach((image) =>{
    image.remove();
  })
  const smlTemples = []
  temples.forEach(temple => {
    const number =temple.area;
    if (number <= 10000){
      smlTemples.push(temple)
    }
  });
  displayHome(smlTemples);
}
const containMain = document.querySelector(".main");
const old = document.getElementById("old");
const newTemple = document.getElementById("new");
const largeTemple = document.getElementById("large");
const smallTemple = document.getElementById("small");
const old1 = document.getElementById("old1");
const newTemple1 = document.getElementById("new1");
const largeTemple1 = document.getElementById("large1");
const smallTemple1 = document.getElementById("small1");
const year = document.querySelector("#year");
let oLastModif = new Date(document.lastModified);
year.innerHTML = `<span class="highlight">${oLastModif.getDate()}/${oLastModif.getMonth() + 1}/${oLastModif.getFullYear()} ${oLastModif.getHours()}:${oLastModif.getMinutes()}:${oLastModif.getSeconds()}</span>`;
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 29",
      area: 53997,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
     templeName: "Tijuana Mexico",
     location: "Tijuana, Mexico",
     dedicated: "2015, December, 13",
     area: 33367,
     imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
    },
    {
      templeName: "St. George Utah",
      location: "St. George, Utah",
      dedicated: "1877, April, 8",
      area: 143969,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    }
  ];

displayHome(temples);
old.addEventListener("click", filterOld);
old1.addEventListener("click", filterOld);

newTemple.addEventListener("click", filterNew);
newTemple1.addEventListener("click", filterNew);

largeTemple.addEventListener("click", large);
largeTemple1.addEventListener("click", large);

smallTemple.addEventListener("click", small);
smallTemple1.addEventListener("click", small);