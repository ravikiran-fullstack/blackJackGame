// how the blackjack game works

/*
    1. There are two nodes in the game, Player and Dealer.

    2. When the game starts Player and Dealer both get two cards each.

    3. Player's total value(Card1 + Card2) is calculated and total is displayed.

    4. Dealers's total value(but only Card1) is calculated and displayed.

    5. Player has the option to either choose one of the two options:
        A. Hit          -> Dealer gives a card to Player, total is updated => (Card 1 + Card 2 + Card 3)
        B. Stand        -> Dealer shows the hidden card and updates the total => (Card 1 + Card 2)

        After Hit, total is compared with 21, if its above 21, Player looses the game,
        if the total is below 21, Player has option to choose again Hit or Stand, 

        After Stand, total is compared, if Dealer total is closer to 21 than Player then player wins

*/

class Player {
  private cards: number[];
  private total: number = 0;

  constructor(card1: number, card2: number) {
    this.cards = [card1, card2];
  }

  public getTotal(): number {
    this.total = this.cards.reduce((acc, current) => acc + current, 0);
    return this.total;
  }

  public getCards(): number[] {
    return this.cards;
  }

  public addNewCard(card: number): void {
    this.cards.push(card);
  }
}

class Dealer {
  private cards: number[];
  private hiddenCard: number = 0;
  private total: number = 0;

  constructor(card1: number, card2: number) {
    // console.log('dealer card1',card1);
    
    this.cards = [card1];
    this.hiddenCard = card2;
  }

  public getTotal(): number {
    this.total = this.cards.reduce((acc, current) => acc + current, 0);
    return this.total;
  }

  public getHiddenCard(): number {
    return this.hiddenCard;
  }

  public addNewCard(card: number): void {
    this.cards.push(card);
  }

  public getCards(): number[] {
    return this.cards;
  }
}

class Game {
  private player: Player;
  private dealer: Dealer;

  private playerTotal: number = 0;
  private dealerTotal: number = 0;

  private winner: string = "";

  constructor() {
    // console.log('game started')
    const playerCard1 = this.drawACard();
    const playerCard2 = this.drawACard();

    this.playerTotal = playerCard1 + playerCard2;

    this.player = new Player(playerCard1, playerCard2);

    if(this.player.getTotal() === 21){
        this.winner = "player";
    }

    const dealerCard1 = this.drawACard();
    const dealerCard2 = 0;

    this.dealerTotal = dealerCard1;

    this.dealer = new Dealer(dealerCard1, dealerCard2);
  }

  public hit() {
    console.log("hit");
    const newCard = this.drawACard();
    this.player.addNewCard(newCard);
    // calculate total 
    // if total is greater than 21
    // dealer wins
    this.playerTotal = this.player.getTotal();
    
    if (this.playerTotal > 21) {
        this.winner = " Dealer won the game";
        return;
    } 
    
    if (this.playerTotal === 21) {
        this.winner = " Player won the game";
        return;
    }
  }

  public stand() {
    console.log("stand");
    const newCard = this.drawACard();
    this.dealer.addNewCard(newCard);

    this.dealerTotal = this.dealer.getTotal();
    console.log('the dealer total', this.dealerTotal);
    
    if(this.dealerTotal < 17){
        this.stand();
        return;
    }

    if(this.dealerTotal > 21){
        this.winner = "Player won the game";
        return;
    }

    if(this.dealerTotal >= this.playerTotal){
        this.winner = "Dealer won the game";
    } else {
        this.winner = "Player won the game";
    }
  }

  private drawACard(): number {
    // return Math.floor(Math.random() * (11 - 10 + 1) + 10);
    return Math.ceil(Math.random() * 11);
  }

  public getPlayerTotal(): number {
    return this.playerTotal;
  }

  public getDealerTotal(): number {
    return this.dealerTotal;
  }

  public getPlayerCards(): number[] {
    return this.player.getCards();
  }

  public getDealerCards(): number[] {
    return this.dealer.getCards();
  }

  public getGameWinner(): string{
    return this.winner;
  }
}

export function startGame() {
  // console.log("new game");
  const game = new Game();
  return game;
}
