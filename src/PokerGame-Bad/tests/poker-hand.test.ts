import { PokerHand } from '../model/poker-hand';
import { Card, Suit, Rank } from '../model/card';

function buildHand(cards: Card[]): PokerHand {
  const hand = new PokerHand();
  for (const card of cards) {
    hand.addCard(card);
  }
  return hand;
}

describe('PokerHand', () => {
  it('should classify a hand as a Pair', () => {
    const hand = buildHand([
      new Card(Suit.Hearts, Rank.Two),
      new Card(Suit.Spades, Rank.Two),
      new Card(Suit.Clubs, Rank.Five),
      new Card(Suit.Diamonds, Rank.Seven),
      new Card(Suit.Hearts, Rank.Nine)
    ]);
    hand.classify();
    expect(hand.getHandRank()).toBe('Pair');
  });

  it('should classify a hand as Flush', () => {
    const hand = buildHand([
      new Card(Suit.Hearts, Rank.Two),
      new Card(Suit.Hearts, Rank.Five),
      new Card(Suit.Hearts, Rank.Seven),
      new Card(Suit.Hearts, Rank.Nine),
      new Card(Suit.Hearts, Rank.Jack)
    ]);
    hand.classify();
    expect(hand.getHandRank()).toBe('Flush');
  });

  it('should correctly compare two hands', () => {
    const hand1 = buildHand([
      new Card(Suit.Hearts, Rank.Two),
      new Card(Suit.Spades, Rank.Two),
      new Card(Suit.Clubs, Rank.Five),
      new Card(Suit.Diamonds, Rank.Seven),
      new Card(Suit.Hearts, Rank.Nine)
    ]);
    const hand2 = buildHand([
      new Card(Suit.Clubs, Rank.Four),
      new Card(Suit.Clubs, Rank.Six),
      new Card(Suit.Diamonds, Rank.Eight),
      new Card(Suit.Spades, Rank.Ten),
      new Card(Suit.Hearts, Rank.Queen)
    ]);
    expect(hand1.compareWith(hand2)).toBe(1); // hand1 has a pair, hand2 has high card
  });
});
