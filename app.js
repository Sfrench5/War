const war = {
    deck : [],
    player1 : {
        deck: []
    },
    player2 : {
        deck: []
    },

    buildDeck(){
        this.deck = [];
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
        for( let i = this.deck.length; i != 0; i-- ){
            i % 2 === 0 ? this.player1.deck.push(this.deck[i]) : this.player2.deck.push(this.deck[i])
        }
    }


}