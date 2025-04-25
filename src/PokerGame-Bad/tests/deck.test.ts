// src/__tests__/deck.test.ts

import { Deck } from '../model/deck';
import { Hand } from '../model/hand';
import { Card, Suit, Rank } from '../model/card';

describe('Deck', () => {
  let deck: Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('should initialize with 52 cards', () => {
    expect(deck.size()).toBe(52);
  });

  it('should remove a card when popping', () => {
    const card = deck.popCard();
    expect(card).toBeDefined();
    expect(deck.size()).toBe(51);
  });

  it('should add a card to the deck', () => {
    const newCard = new Card(Suit.Hearts, Rank.Two);
    deck.addCard(newCard);
    expect(deck.size()).toBe(53);
    expect(deck.getCards().some(card => card.toString() === newCard.toString())).toBe(true);
  });

  it('should shuffle the deck', () => {
    const before = deck.getCards().map(card => card.toString()).join(',');
    deck.shuffle();
    const after = deck.getCards().map(card => card.toString()).join(',');
    expect(before).not.toBe(after); // en teoría deberían diferir
  });

  it('should deal hands correctly', () => {
    const hands = deck.dealHands(2, 5);
    expect(hands.length).toBe(2);
    expect(hands[0].size()).toBe(5);
    expect(hands[1].size()).toBe(5);
    expect(deck.size()).toBe(42); // 52 - (2*5)
  });

  it('should move cards to a hand', () => {
    const hand = new Hand();
    deck.moveCardsToHand(hand, 4);
    expect(hand.size()).toBe(4);
    expect(deck.size()).toBe(48);
  });

  it('should recover cards from hands', () => {
    const hands = deck.dealHands(2, 5);
    deck.recoverCardsFromHands(hands);
    expect(deck.size()).toBe(52);
    expect(hands[0].size()).toBe(0);
    expect(hands[1].size()).toBe(0);
  });

  it('should sort cards by suit and rank', () => {
    deck.shuffle();
    deck.sort();
    const sorted = deck.getCards();
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      expect(
        prev.getSuit() < curr.getSuit() ||
        (prev.getSuit() === curr.getSuit() && prev.getRank() <= curr.getRank())
      ).toBe(true);
    }
  });
});
