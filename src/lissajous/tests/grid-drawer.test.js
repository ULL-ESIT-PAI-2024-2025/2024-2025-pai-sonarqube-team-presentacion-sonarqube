import { GridDrawer } from '../src/grid-drawer';
jest.mock('../src/line-drawer');
describe('GridDrawer', () => {
    let lineDrawerMock;
    let gridDrawer;
    beforeEach(() => {
        lineDrawerMock = {
            drawLine: jest.fn(),
        };
        gridDrawer = new GridDrawer(lineDrawerMock, 100, 100, 10);
    });
    it('should draw a grid with the correct lines', () => {
        gridDrawer.draw();
        expect(lineDrawerMock.drawLine).toHaveBeenCalledTimes(22);
        expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(0, 0, 0, 100, '#e0e0e0', 1);
        expect(lineDrawerMock.drawLine).toHaveBeenCalledWith(0, 0, 100, 0, '#e0e0e0', 1);
    });
});
