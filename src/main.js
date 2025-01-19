import productos from './db/productos'
import './sass/main.scss'

console.log(productos)

const contenedorProductos = document.getElementById('container-productos')
console.log(contenedorProductos)


const start = () => {
    console.warn('Se cargó todo el HTML')

    let html = ''

    productos.forEach(prod => {
        console.log(prod)
        // html = html + '' === html += ''
        html += `<div class="card">
            <article class="card__article">
                <div class="card__image-container">
                    <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                </div>
                <div class="card__content">
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
                </div>
            </article>
        </div>`
    })

    console.log(html) /* Voy a tener varios div.card * 5 -> */

    contenedorProductos.innerHTML = html

}

const start2 = () => {

    productos.forEach(prod => {
        const card = document.createElement('div')
        card.classList.add('card')
        //console.log(card)
        const articulo = document.createElement('article')
        articulo.classList.add('card__article')
        //console.log(articulo)
        card.appendChild(articulo)
        //console.log(card)
        const cardImageContainer = document.createElement('div')
        cardImageContainer.classList.add('card__image-container')
        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = prod.foto
        foto.alt = prod.nombre
        cardImageContainer.appendChild(foto)
        // console.log(cardImageContainer)
        articulo.appendChild(cardImageContainer)
        //console.log(card)

        /* <div class="card__content">
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
        </div> */

        const cardContent = document.createElement('div')
        const h2Titulo = document.createElement('h2')
        h2Titulo.classList.add('card__heading')
        h2Titulo.textContent = prod.nombre
        //console.log(h2Titulo)
        const cardDescripcion = document.createElement('div')
        cardDescripcion.classList.add('card__description')
        const parrafo = document.createElement('p')
        parrafo.textContent = prod.descripcion
        //console.log(parrafo)

        cardContent.appendChild(h2Titulo)
        cardDescripcion.appendChild(parrafo)
        cardContent.appendChild(cardDescripcion)
        //console.log(cardContent)
        articulo.appendChild(cardContent)
        console.log(card)

        contenedorProductos.appendChild(card)


    })

}

const start3 = () => {

    const fragmento = new DocumentFragment();

    productos.forEach(prod => {
        const card = document.createElement('div')
        card.classList.add('card')
        //console.log(card)
        const articulo = document.createElement('article')
        articulo.classList.add('card__article')
        //console.log(articulo)
        card.appendChild(articulo)
        //console.log(card)
        const cardImageContainer = document.createElement('div')
        cardImageContainer.classList.add('card__image-container')
        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = prod.foto
        foto.alt = prod.nombre
        cardImageContainer.appendChild(foto)
        // console.log(cardImageContainer)
        articulo.appendChild(cardImageContainer)
        //console.log(card)

        /* <div class="card__content">
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
        </div> */

        const cardContent = document.createElement('div')
        const h2Titulo = document.createElement('h2')
        h2Titulo.classList.add('card__heading')
        h2Titulo.textContent = prod.nombre
        //console.log(h2Titulo)
        const cardDescripcion = document.createElement('div')
        cardDescripcion.classList.add('card__description')
        const parrafo = document.createElement('p')
        parrafo.textContent = prod.descripcion
        //console.log(parrafo)

        cardContent.appendChild(h2Titulo)
        cardDescripcion.appendChild(parrafo)
        cardContent.appendChild(cardDescripcion)
        //console.log(cardContent)
        articulo.appendChild(cardContent)
        console.log(card)

        fragmento.appendChild(card)
        

    })
        
    // Intervengo una sola vez el DOM.
    console.log(fragmento) /* Los 5 div cards */

    contenedorProductos.appendChild(fragmento)

    
}




//                          evento        | callback
window.addEventListener('DOMContentLoaded', start) /* se dispara cuando todo el html fue leido (cargado) */

