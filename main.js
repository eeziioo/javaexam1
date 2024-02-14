// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// javob:Pasdan yozib keting kodini

alert(5 % 2)


// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// Javob:Pasdan yozib keting kodini

let ikki = Math.random(1) * 100

console.log(Math.ceil(ikki));


// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// javob: 12 chiqishi kerak!


let nomer = 12.510

console.log(Math.ceil(nomer));



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// Javob:Kodini yozib bering 


let mars = 'mars it school'

function marscha() {
    console.log(mars);
    console.log(mars.length);
}

marscha()


// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// Javob:Kodini yozib bering

let fuats = ['Mars It school']

for (let i = 0; i < 10; i++) {
    console.log(fuats[0]);
}



// 6-savol Array methods

let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// Javob:Kodini yozib bering

console.log(harflar[19] + harflar[11] + harflar[0] + harflar[16]);


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Javob:Kodini yozib bering

let num1 = +prompt('Yoshingizni kiriting')

if (num1 > 18) {
    console.log(num1 + 'yoshdan katta bo`lsa consol da Siz balag`ot yoshiga yetgansiz');
} else if (num1 < 18) {
    console.log(num1 + 'aks holda  siz balog`at yoshiga yetmagansiz');
} else {
    console.log(num1 + 'agar yoshi 18 yoshga teng bolsa  balog`at yoshi muborak');
}



// 8 savol
// HTML fayldagi <div class="box"></div> ga JavaScript orqali style berish

// Javob: Kodini yozib bering

// // function sakkiz() {
// //     // document.querySelector('box').textContent = 'Abdulxamid nma gap'
// // }



// 9-savol Switch case 


// Promt 1 dan 7 gacha bo'lgan raqam kiriting va kiritilgan raqam qaysi hafta kuniga to'gri kelishini chiqarib bering
// masalan 4 raqamini kiritsam console.log da("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi") bo'lib chiqish kerak
// agar kiritilgan raqam 7 dan katta bolsa ya'ni 8 yoki 15 kiritilsa console da (Namalum raqam kiritdingiz ) deb chiqish kerak


// Javob:Kodini yozib bering

let savol1 = +prompt('1 dan 7 gacha son kiriting')
 
for (let i = 0; i < 7; i++) {
    switch (savol1) {
        case '1':
            i++
            console.log('Dushanba');
            break;
        case '2':
            i++
            console.log('Seshanba');
            break;
        case '3':
            i++
            console.log('Chorshanba');
            break;
        case '4':
            i++
            console.log('Payshanba');
            break;
        case '5':
            i++
            console.log('Juma');
            break;
        case '6':
            i++
            console.log('Shanba');
            break;
        case '7':
            i++
            console.log('Yakshanba');
            break;


    }
}


    // 10-savol Array metodlari

    // let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // shu arraydagi juft sonlarni console ga chiqaring


    // Javob :Kodini yozib bering

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let arr2 = []
    arr.forEach(function (item) {

        arr2.push(item * 2)
    })

    console.log(arr2);
