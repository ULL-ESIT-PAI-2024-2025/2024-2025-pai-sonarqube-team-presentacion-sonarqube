import { LineDrawer } from '../src/line-drawer';

describe('LineDrawer', () => {
  let contextMock: CanvasRenderingContext2D;
  let lineDrawer: LineDrawer;

  beforeEach(() => {
    contextMock = {
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      strokeStyle: '',
      lineWidth: 0,
    } as unknown as CanvasRenderingContext2D;

    lineDrawer = new LineDrawer(contextMock);
  });

  it('should draw a line with the correct parameters', () => {
    lineDrawer.drawLine(0, 0, 100, 100, 'red', 2);

    expect(contextMock.beginPath).toHaveBeenCalled();
    expect(contextMock.moveTo).toHaveBeenCalledWith(0, 0);
    expect(contextMock.lineTo).toHaveBeenCalledWith(100, 100);
    expect(contextMock.strokeStyle).toBe('red');
    expect(contextMock.lineWidth).toBe(2);
    expect(contextMock.stroke).toHaveBeenCalled();
  });
});
