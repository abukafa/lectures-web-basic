// MEMBUAT VARIABLE
let name = 'hamzah dwi nugroho'
name = 'haidar'


// MEMBUAT METHOD (FUNGSI) PENGUBAH HURUF BESAR
let kapital = name.toUpperCase()


// MENAMPILKAN DI CONSOLE
console.log(name);
console.log(kapital);


// MEMBUAT ALERT (PESAN)
alert('Hello World! My Name is ' + name);


// MEMBUAT PROMPT (PESAN INPUT)
name = prompt('Nama Kamu Siapa sih ?')
umur = prompt('Berapa Umur Mu ?')
asal = prompt('Kamu Dari Mana ?')
alert('Nama ku ' + name)
alert('Umur ku ' + umur)
alert('Aku dari ' + asal)
alert('Halo, aku ' + name + ' umur ku ' + umur + ' aku datang dari ' + asal)


// IF STATEMENT & OPERATOR PEMBANDING
if (umur >= 13) {
    alert('Kamu boleh Masuk!')
}else if (umur < 7) {
    alert('Ijin dulu sama Ibu..')
}else{
    alert('KAMU BELUM BISA MASUK')
}


// NESTED IF (BERSARANG)
let password = 'rahasia'
let input = prompt('Masukan Password :')
if (input.length >= 6 && input.indexOf(' ') === -1) {
    if (input == password) {
        alert('Selamat Datang')
    }else{
        alert('ANDA BELUM TERDAFTAR')
    }
}else{
    alert('Masukan kembali password anda!')
}


// SWITCH STATEMENT (ALTERNATIF IF)
const nilai = 50
switch(nilai) {
    case 90:
        predikat = 'A';
        break;
    case 80:
        predikat = 'B+';
        break;
    case 70:
        predikat = 'B';
        break;
    case 60:
        predikat = 'C';
        break;
    case 50:
        predikat = 'D';
        break;
    default:
        predikat = '';
}
alert('Nilai anda : ' + nilai + ' dengan Predikat : ' + predikat)


// ARRAY
let angka = [2,6,8,9,4,2,1,7]
let warna = ['merah', 'kuning', 'hijau', 'biru']
let macam = [true, 5, 'kopi', 14.7, null]
console.log(warna[3]);
warna.push('pink')      // menambah item array di belakang
warna.pop()             // menghapus item array di belakang
warna.shift()           // menghapus item array di depan
warna.unshift('hitam')  // menambah item array di depan


// NESTED ARRAY (BERSARANG)
let murid = [
    ['auni', 'amira', 'rifa', 'ayska'],
    ['hikari', 'haby', 'aro', 'aly', 'hamzah', 'haidar']
]
console.log(murid[0][2]);
let board = [
    ['S', null, 'O'],
    ['S', 'O', 'S'],
    [null, null, 'O'],
]






