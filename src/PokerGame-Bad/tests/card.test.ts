// src/__tests__/card.test.ts

import { Card, Suit, Rank } from '../model/card';

describe('Card', () => {
  it('should create a card with default values', () => {
    const card = new Card();
    expect(card.getSuit()).toBe(Suit.Clubs);
    expect(card.getRank()).toBe(Rank.Two);
    expect(card.toString()).toBe('2 of Clubs');
  });

  it('should create a card with given suit and rank', () => {
    const card = new Card(Suit.Hearts, Rank.King);
    expect(card.getSuit()).toBe(Suit.Hearts);
    expect(card.getRank()).toBe(Rank.King);
    expect(card.toString()).toBe('King of Hearts');
  });

  it('should return correct image path', () => {
    const card = new Card(Suit.Spades, Rank.Ace);
    expect(card.getImage()).toBe('img/AS.png');
  });

  it('should convert face card ranks to strings', () => {
    expect(new Card(Suit.Hearts, Rank.Jack).toString()).toBe('Jack of Hearts');
    expect(new Card(Suit.Spades, Rank.Queen).toString()).toBe('Queen of Spades');
    expect(new Card(Suit.Diamonds, Rank.Ten).toString()).toBe('10 of Diamonds');
  });
});
