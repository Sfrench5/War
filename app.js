const war = {
    deck : [],
    warObj: {
        compare: []
    },
    player1 : {
        deck: []
    },
    player2 : {
        deck: []
    },

    buildDeck(){
        
        const suits = ["S", "C", "D", "H"];
        for( let i = 0; i < suits.length; i++ ){
            for( let j = 2; j < 15; j++ ){
                this.deck.push( suits[i] + j )
            }
        }
    },

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    dealCards() {
        for( let i = this.deck.length - 1; i != -1; i-- ){
            i % 2 === 0 ? this.player1.deck.push(this.deck[i]) : this.player2.deck.push(this.deck[i])
            
        }
    }


}    

// On click next card
    const nextCards = document.querySelector(".next");
    const player1Card = document.querySelector(".player1")
    const player2Card = document.querySelector(".player2")

    nextCards.addEventListener("click", pressNext)
    function pressNext(){
        const p1Card = war.player1.deck.shift();
        const p2Card = war.player2.deck.shift();
        player1Card.innerHTML = p1Card
        player2Card.innerHTML = p2Card
        

        console.log(+(p1Card - p1Card[0]))
    }



    war.buildDeck();
    war.shuffle(war.deck);
    war.dealCards();