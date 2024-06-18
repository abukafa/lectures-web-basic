const container = document.querySelector('#container');

for ( i=1 ; i<100 ; i++ ) {
    const pokeBall = document.createElement('div')
    pokeBall.classList.add('pokemon')

    const imgPokemon = document.createElement('img')
    imgPokemon.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +i+ '.png'

    const label = document.createElement('span')
    label.innerText = i

    pokeBall.appendChild(imgPokemon)
    pokeBall.appendChild(label)
    container.appendChild(pokeBall)
}