"use strict";
import { LissajousDrawer } from '../src/lissajous-drawer';
import { LineDrawer } from '../src/line-drawer';
jest.mock('../src/line-drawer');
describe('LissajousDrawer', () => {
  let lineDrawerMock: jest.Mocked<LineDrawer>;
  let lissajousDrawer: LissajousDrawer;
  beforeEach(() => {
    lineDrawerMock = {
      drawLine: jest.fn(),
    } as unknown as jest.Mocked<LineDrawer>;
    lissajousDrawer = new LissajousDrawer(lineDrawerMock as any, 200, 200);
  });
  it('should draw a Lissajous curve with the correct parameters', () => {
    lissajousDrawer.draw(3, 2, Math.PI / 2, 100, 50);
    expect(lineDrawerMock.drawLine).toHaveBeenCalled();
  });
});
