const age = 16

if (age >= 18 && age <= 25) {
    console.log ('Je krijgt 50% korting!'); 
}
else console.log ('Sorry no discount for you.')

const name = 'Bram'
// hieronder deed die eerst niet, ik had = ipv === . logisch
if (name === 'Bram' || name ==='Sarah'){
    console.log('Yeah, je krijgt een gratis biertje!')
}
//Bestel je voor meer dan 25 euro aan drankjes? Dan krijg je gratis (vega)bitterballen. 🥘
//Bestel je voor meer dan 50 euro aan drankjes? Dan krijg je gratis portie nachos.🌮 
//Bestel voor 100 euro of meer? Dan krijg je een gratis flesje champagne. 🍾
totalAmount = 10
if (totalAmount >= 100){
    console.log ('Here you are! A bottle of Champagne!')
} else if (totalAmount >= 50 ) {
    console.log('yeah you get free nachos!');
} else if (totalAmount >= 25) {
    console.log('yeah you get free balls!');
} 
else console.log('You will not get anything for free');