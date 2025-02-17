const btnOpenCard = document.querySelectorAll('[data-action="open-card"]');
const btnCloseCard = document.querySelectorAll('[data-action="close-card"]');
const addCard = document.getElementById('add-to-cart');
const product = document.getElementById('product');
const productImage = product.querySelector('.product-image');
const thumbs = product.querySelector(".product-thumbs");
const btnIncrease = product.querySelector('#more');
const btnDeacrese = product.querySelector('#less');
const inputQuantity = product.querySelector('#quantity');
const colorPropertir = document.querySelector("#color-propertie")
const nameProduct = product.querySelector('.product-name');
const btnAddCard = product.querySelector('#add-to-cart')

thumbs.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        const imageSrc = e.target.src;

        productImage.src = `${imageSrc}`;
    }
})

colorPropertir.addEventListener('click', (e) => {
    if (e.target.tagName === "INPUT") {
        const newColor = e.target.value;
        productImage.src = `./images/${newColor}1.png`;
        const uperCase = newColor.toUpperCase();
        nameProduct.textContent = `Dunk Low Retro ${uperCase}`;
        const shoesThumb = document.querySelectorAll('.product-nike-img');
        let number = 1;
        shoesThumb.forEach(element => {
            element.src = `./images/${newColor}${number}.png`;
            number++
        });
    }
})

btnIncrease.addEventListener('click', (e) => {
    if (parseInt(inputQuantity.value) < 5) {
        inputQuantity.value = parseInt(inputQuantity.value) + 1;
    }
})
btnDeacrese.addEventListener('click', (e) => {
    if (parseInt(inputQuantity.value) > 1) {
        inputQuantity.value = parseInt(inputQuantity.value) - 1;
    }
})

const windowCard = document.getElementById('card');

const renderCard = () => {
    windowCard.classList.add('card-active')
}

btnOpenCard.forEach((btn) => {
    btn.addEventListener('click', () => {
        renderCard()
    })
})

btnCloseCard.forEach((btn) => {
    btn.addEventListener('click', () => {
        windowCard.classList.remove('card-active');
    })
})

btnAddCard.addEventListener('click', () => {
    const productValues = {
        quantity: quantity = parseInt(product.querySelector('#quantity').value),
        name: product.querySelector('.product-name'),
        color: product.querySelector('#color-propertie input:checked').value,
        size: product.querySelector('#color-size input:checked').value,

    }
    console.log(productValues);
})