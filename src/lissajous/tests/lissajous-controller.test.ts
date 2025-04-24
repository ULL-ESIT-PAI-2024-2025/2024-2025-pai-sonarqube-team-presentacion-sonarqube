import { LissajousController } from '../src/lissajous-controller';
import { LissajousModel } from '../src/lissajous-model';
import { LissajousView } from '../src/lissajous-view';

jest.mock('../src/lissajous-view');

describe('LissajousController', () => {
  let model: LissajousModel;
  let viewMock: jest.Mocked<LissajousView>;
  let controller: LissajousController;

  beforeEach(() => {
    model = new LissajousModel();
    viewMock = {
      render: jest.fn(),
      update: jest.fn(),
      getSlider: jest.fn().mockReturnValue({ addEventListener: jest.fn() }),
      getValueDisplay: jest.fn().mockReturnValue({ textContent: '' }),
    } as unknown as jest.Mocked<LissajousView>;

    controller = new LissajousController(model, viewMock);
  });

  it('should initialize and render the view', () => {
    expect(viewMock.render).toHaveBeenCalledWith(model.getParameters());
  });
});
