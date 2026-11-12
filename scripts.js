const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const SumAll = document.querySelector('.sum-all')
const filter = document.querySelector('.filter')

function formatCurrency(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += ` 
   <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price"> ${formatCurrency(product.price)}</p>
    </li>
    `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = ` 
        <li>
            <p>O Valor Total dos Itens é ${formatCurrency(totalValue)}</p>
        </li>
        `
}

function filterItems() {
    const filterJustVegan = menuOptions.filter((product => product.vegan))
    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
SumAll.addEventListener('click', sumAllItems)
filter.addEventListener('click', filterItems)