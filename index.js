// Code your solutions in this file
function writeCards(name, event){
    let thankYouCards = []
    for (let i = 0; i < name.length; i++ ) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(n) {
    console.log(n)
    return n ? countDown(n - 1) : 0;
}

countDown(10)