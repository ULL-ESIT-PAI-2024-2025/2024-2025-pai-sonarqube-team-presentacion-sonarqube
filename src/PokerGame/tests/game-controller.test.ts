import { GameController } from '../controller/GameController';
import { PokerView } from '../view/PokerView';

jest.mock('../view/PokerView');

describe('GameController', () => {
  beforeEach(() => {
    // Preparamos el entorno simulado del DOM
    document.body.innerHTML = `
      <button id="dealButton"></button>
      <button id="dealHand1Btn"></button>
      <button id="dealHand2Btn"></button>
      <input id="cardCount" value="5"/>
      <div id="hand1"></div>
      <div id="hand2"></div>
      <div id="result"></div>
    `;
  });

  it('should initialize and bind events correctly', () => {
    new GameController('hand1', 'hand2', 'result', 'dealButton');

    const dealButton = document.getElementById('dealButton')!;
    dealButton.click(); // dispara handleDeal()

    const dealHand1Btn = document.getElementById('dealHand1Btn')!;
    dealHand1Btn.click(); // dispara handleDealHand1()

    const dealHand2Btn = document.getElementById('dealHand2Btn')!;
    dealHand2Btn.click(); // dispara handleDealHand2()

    const mockInstance = (PokerView as jest.Mock).mock.instances[0];
    
    expect(mockInstance.renderHands).toHaveBeenCalled();
    expect(mockInstance.showWinner).toHaveBeenCalled();
  });
});
