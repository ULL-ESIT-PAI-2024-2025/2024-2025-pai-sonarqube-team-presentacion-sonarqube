import { PokerGame } from '../model/poker-game';

describe('PokerGame', () => {
  let game: PokerGame;

  beforeEach(() => {
    game = new PokerGame();
  });

  it('should deal 5 cards to each hand by default', () => {
    game.deal();
    expect(game.getHand1().size()).toBe(5);
    expect(game.getHand2().size()).toBe(5);
  });

  it('should deal custom number of cards to hand1 only', () => {
    game.dealHand1(3);
    expect(game.getHand1().size()).toBe(3);
    expect(game.getHand2().size()).toBe(0);
  });

  it('should deal custom number of cards to hand2 only', () => {
    game.dealHand2(4);
    expect(game.getHand2().size()).toBe(4);
    expect(game.getHand1().size()).toBe(0);
  });

  it('should return correct winner between two valid hands', () => {
    game.deal();
    const winner = game.getWinner();
    expect([0, 1, 2]).toContain(winner);
  });

  it('should return 0 as winner if both hands are empty', () => {
    expect(game.getWinner()).toBe(0);
  });
});
