const form = document.querySelector('#cari')
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    document.querySelectorAll('img')
        .forEach((img) => img.remove())

    const keyword = form.elements.query.value
    const kunci = {
        params: { q: keyword }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', kunci)
    tampilkanGambar(res.data)
    form.elements.query.value = ''
})
function tampilkanGambar(show) {
    for (let hasil of show) {
        const img = document.createElement('img')
        img.src = hasil.show.image.medium
        document.body.append(img)
    }
}



