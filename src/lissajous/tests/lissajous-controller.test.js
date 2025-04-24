import { LissajousController } from '../src/lissajous-controller';
import { LissajousModel } from '../src/lissajous-model';
jest.mock('../src/lissajous-view');
describe('LissajousController', () => {
    let model;
    let viewMock;
    let controller;
    beforeEach(() => {
        model = new LissajousModel();
        viewMock = {
            render: jest.fn(),
            update: jest.fn(),
            getSlider: jest.fn().mockReturnValue({ addEventListener: jest.fn() }),
            getValueDisplay: jest.fn().mockReturnValue({ textContent: '' }),
        };
        controller = new LissajousController(model, viewMock);
    });
    it('should initialize and render the view', () => {
        expect(viewMock.render).toHaveBeenCalledWith(model.getParameters());
    });
});
