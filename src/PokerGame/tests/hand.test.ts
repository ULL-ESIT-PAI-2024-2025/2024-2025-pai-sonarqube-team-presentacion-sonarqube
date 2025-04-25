import { Hand } from '../model/hand';
import { Card, Suit, Rank } from '../model/card';
import { Deck } from '../model/deck';

describe('Hand', () => {
  it('should add a single card', () => {
    const hand = new Hand('Test');
    const card = new Card(Suit.Hearts, Rank.Ace);
    hand.addCard(card);
    expect(hand.size()).toBe(1);
    expect(hand.getCards()[0].toString()).toBe(card.toString());
  });

  it('should add multiple cards from another hand', () => {
    const hand1 = new Hand();
    hand1.addCard(new Card(Suit.Clubs, Rank.Three));
    hand1.addCard(new Card(Suit.Spades, Rank.Seven));

    const hand2 = new Hand();
    hand2.addCards(hand1);

    expect(hand2.size()).toBe(2);
    expect(hand2.getCards()[0].toString()).toBe(hand1.getCards()[0].toString());
  });

  it('should pop the last card', () => {
    const hand = new Hand();
    const card = new Card(Suit.Hearts, Rank.Queen);
    hand.addCard(card);
    const popped = hand.popCard();
    expect(popped?.toString()).toBe(card.toString());
    expect(hand.size()).toBe(0);
  });

  it('should move cards from a deck', () => {
    const deck = new Deck();
    const hand = new Hand();
    hand.moveCardsFromDeck(deck, 5);
    expect(hand.size()).toBe(5);
  });

  it('should return correct label and string', () => {
    const hand = new Hand('Player 1');
    const card = new Card(Suit.Diamonds, Rank.Nine);
    hand.addCard(card);
    expect(hand.getLabel()).toBe('Player 1');
    expect(hand.toString()).toContain('Player 1');
    expect(hand.toString()).toContain(card.toString());
  });

  it('should clear the hand', () => {
    const hand = new Hand();
    hand.addCard(new Card(Suit.Spades, Rank.Ten));
    hand.clear();
    expect(hand.size()).toBe(0);
  });
});
