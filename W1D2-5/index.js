// opdr 1 werkt!

const age = 20

if (age >= 18 && age <= 25 ) {
    console.log ('You get 50% discount!'); 

}
else console.log ('Unfortunately you do not get any discount.')

// opdr 2. (let op definieren!) het werkt!

const name = 'Bram'

if (name == 'Bram' || name == 'Sarah' ) {
    console.log ('Congratulations! You get a free beer!'); 

}
else console.log ('No luck for you, you have to pay.')

/*boven 25 drankjes gratis bitterballen , 
boven 50 drankjes gratis nachos
boven 100 drankjes gratis fles champagne */


const totalAmount = 10

if (totalAmount >= 100) {
    console.log ('Gefeliciteerd, een gratis fles champagne.')
} else if (totalAmount >=50) {
    console.log ('Here you are, you get free nachos.')
} else if (totalAmount >= 25) {
    console.log ('Free bitterballs for you!') 
} 
else console.log ('Sorry no free snack for you, you ordered under 25 drinks.')