let cards = []
let sum = 0
let headPara = document.getElementById('head-para')
let cardsEl = document.getElementById('cards')
let SumTxt = document.getElementById('sum')
let startBtn = document.getElementById('start')
let newCardBtn = document.getElementById('new-card')
let userInfo = document.getElementById('user')
let removeBtn = document.getElementById('remove-card')
let isAlive = false
let hasBlackJack = false
let user = {
    Name :'Dharmesh',
    Chips: 300 +'$'
} 
let message = ''

// let card1 = random()
// let card2 = random()
// let card3 = random()


function random(){
    let randomNum =  Math.floor(Math.random() * 11) +1 
    if(randomNum > 10){
        return 10
    }
    else if(randomNum === 1){
        return 11
    }
    else{
        return randomNum
    }
}

function startGame(){
    isAlive = true
    let card1 = random()
    let card2 = random()
    cards = [card1, card2]
    sum = card1 + card2 
    renderGame()
}



function renderGame (){
    cardsEl.textContent = 'Cards: '
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += ' '+cards[i] 
    }    
    SumTxt.textContent = "Sum:" + sum
        if(sum <= 20 ){
            isAlive = true
            message = "Do you want to draw a new card?"
        }
        else if(sum === 21){
            message = "You've got Blackjack!"
            hasBlackJack = true
        }
        else if(sum > 21){
            message = "You're out of the game!"
            isAlive = false
        }
        headPara.textContent = message       


}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = random()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function removeFn(){
    cards.pop()
    
    renderGame()
}

startBtn.addEventListener('click', () => startGame())
newCardBtn.addEventListener('click', () => newCard())
removeBtn.addEventListener('click', () => removeFn())
userInfo.textContent = user.Name + ' : ' + user.Chips +" Chips available to use"