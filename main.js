const mercadoLibre = async () => {

    let buscador = document.getElementById("buscador")

    let response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador.value}`)
    let data = await response.json()
    productos = data.results

    container.innerHTML= ``
        for (const product of productos) {
        let caja = document.createElement("div")
        caja.innerHTML = `
        <img src="${product.thumbnail}">
        <h2>${product.title}</h2>
        <h4>$ ${product.price}</h4>
        <hr size="8px" color="black" />
        `
        container.append(caja)
    }

}