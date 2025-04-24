import { LissajousDrawer } from '../src/lissajous-drawer';
import { LineDrawer } from '../src/line-drawer';

describe('LissajousDrawer', () => {
  const dummyContext = {} as CanvasRenderingContext2D;

  it('should draw 1000 lines when drawing a Lissajous curve', () => {
    // Espiamos el método drawLine del prototipo
    const spy = jest.spyOn(LineDrawer.prototype, 'drawLine').mockImplementation(() => {});

    const lissajousDrawer = new LissajousDrawer(dummyContext, 200, 200);
    lissajousDrawer.draw(3, 2, Math.PI / 2, 100, 50);

    expect(spy).toHaveBeenCalledTimes(1000);
    expect(spy).toHaveBeenCalledWith(expect.any(Number), expect.any(Number), expect.any(Number), expect.any(Number), 'black', 1);

    spy.mockRestore();
  });
});