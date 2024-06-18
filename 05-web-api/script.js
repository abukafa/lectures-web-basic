// MEMBUAT VARIABLE
const req = new XMLHttpRequest()
let data
// MEMPROSES DATA RESPON & PARSING
req.onload = function() {
    data = JSON.parse(this.responseText)
    console.log(data);
}
// MENANGANI ERROR
req.onerror = function() {
    console.log('Ada yang salah : ', this);
}
// MEMASUKAN URL API
req.open('GET', 'https://swapi.dev/api/people/80', true)
req.send()