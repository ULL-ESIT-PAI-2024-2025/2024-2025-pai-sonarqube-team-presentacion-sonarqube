import { GridDrawer } from '../src/grid-drawer';
import { LineDrawer } from '../src/line-drawer';

jest.mock('../src/line-drawer');

describe('GridDrawer', () => {
  let lineDrawerMock: jest.Mocked<LineDrawer>;
  let gridDrawer: GridDrawer;

  beforeEach(() => {
    lineDrawerMock = {
      drawLine: jest.fn(),
    } as unknown as jest.Mocked<LineDrawer>;

    // width=100, height=100, cellSize=50 para facilitar la prueba
    gridDrawer = new GridDrawer({} as any, 100, 100, 50);
    // Inyectar el mock manualmente
    (gridDrawer as any).lineDrawer = lineDrawerMock;
  });

  it('should draw a grid with correct vertical and horizontal lines', () => {
    gridDrawer.draw();

    // 3 líneas verticales (x=0,50,100) + 3 líneas horizontales (y=0,50,100)
    expect(lineDrawerMock.drawLine).toHaveBeenCalledTimes(6);

    expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(0, 0, 0, 100, '#e0e0e0', 1);   // vertical
    expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(50, 0, 50, 100, '#e0e0e0', 1); // vertical
    expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(100, 0, 100, 100, '#e0e0e0', 1); // vertical

    expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(0, 0, 100, 0, '#e0e0e0', 1);   // horizontal
    expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(0, 50, 100, 50, '#e0e0e0', 1); // horizontal
    expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(0, 100, 100, 100, '#e0e0e0', 1); // horizontal
  });
});
