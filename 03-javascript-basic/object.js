// OBJECT DI DALAM ARRAY
const students = [
    {
        name : 'nurul auni afifah',
        age : 13,
        city : 'bangka'
    },
    {
        name : 'amiratul hisanah',
        age : 14,
        city : 'bangka'
    },
    {
        name : 'rifa syahida',
        age : 15,
        city : 'garut'
    },
    {
        name : 'ayska fatima naura',
        age : 13,
        city : 'bekasi'
    },
    {
        name : 'mariyah alqibthiyah',
        age : 6,
        city : 'ciamis'
    }
]


// ARRAY DI DALAM OBJECT (BERSARANG)
const student = {
    firstName : 'kamal',
    lastName : 'aro',
    skills : ['tapak suci', 'muay thai', 'cooking'],
    exam : {
        alquran : 90,
        bhsArab : 85,
        tsaqofah : 80
    }
}

// AWAS !! INFINITE LOOP
// for (i=0;i>0;i++) {
//     console.log(i);
// }

// LOOPING (PERULANGAN)
// FOR ( INISIALISASI ; KONDISI ; INCREMENT(++)/DECREMENT(--) )
for ( a=1 ; a<=5 ; a++ ) {
    console.log('ini adalah perulangan ' + a);
}

for ( i=0 ; i<students.length ; i++) {
    console.log(i+1 + '. ' + students[i].name);
}

// NESTED LOOPING (PERULANGAN BERSARANG)
let jumlahSoal = 50
let pilihanGanda = ['A', 'B', 'C' , 'D', 'E']
for ( s=1 ; s<=jumlahSoal ; s++ ) {
    console.log( s + '. Ini soal ujian' );
    for ( p=0 ; p<pilihanGanda.length ; p++ ) {
        console.log( '   ' + pilihanGanda[p] + '. ' + students[0].name );
    }
}


