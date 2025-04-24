import { LissajousView } from '../src/lissajous-view';

describe('LissajousView', () => {
  let view: LissajousView;

  beforeEach(() => {
    // Set up the DOM elements required by the LissajousView constructor
    document.body.innerHTML = `
      <canvas id="canvasId" width="500" height="500"></canvas>
      <input id="slider1" type="range" />
      <input id="slider2" type="range" />
      <input id="slider3" type="range" />
      <input id="slider4" type="range" />
      <input id="slider5" type="range" />
      <span id="value1"></span>
      <span id="value2"></span>
      <span id="value3"></span>
      <span id="value4"></span>
      <span id="value5"></span>
    `;
    view = new LissajousView('canvasId');
  });

  it('should initialize canvas and context correctly', () => {
    const canvas = document.getElementById('canvasId') as HTMLCanvasElement;
    expect(view.getContext()).toBe(canvas.getContext('2d'));
  });

  it('should initialize sliders correctly', () => {
    const sliders = view.getSliders();
    expect(sliders).toHaveLength(5);
    sliders.forEach((slider, index) => {
      expect(slider.id).toBe(`slider${index + 1}`);
    });
  });

  it('should initialize value displays correctly', () => {
    const valueDisplays = view.getValueDisplays();
    expect(valueDisplays).toHaveLength(5);
    valueDisplays.forEach((display, index) => {
      expect(display.id).toBe(`value${index + 1}`);
    });
  });

  it('should return the correct slider by index', () => {
    const slider = view.getSlider(1);
    expect(slider.id).toBe('slider1');
  });

  it('should return the correct value display by index', () => {
    const valueDisplay = view.getValueDisplay(1);
    expect(valueDisplay.id).toBe('value1');
  });

  it('should render the grid and Lissajous curve', () => {
    const mockGridDraw = jest.spyOn(view.getGrid(), 'draw');
    const mockLissajousDraw = jest.spyOn(view['lissajous'], 'draw');

    view.render({ freqA: 1, freqB: 2, phi: 0, amplitudeX: 100, amplitudeY: 100 });

    expect(mockGridDraw).toHaveBeenCalled();
    expect(mockLissajousDraw).toHaveBeenCalledWith(1, 2, 0, 100, 100);
  });

  it('should update the canvas and animate the Lissajous curve', () => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });
    const mockLissajousDraw = jest.spyOn(view['lissajous'], 'draw');

    view.update({ freqA: 1, freqB: 2, phi: 0, amplitudeX: 100, amplitudeY: 100 });

    expect(mockLissajousDraw).toHaveBeenCalledWith(1, 2, 0.01, 100, 100);
  });

  it('should throw an error if canvas element is not found', () => {
    document.body.innerHTML = ''; // Clear the DOM
    expect(() => new LissajousView('canvasId')).toThrowError(
      "Cannot read properties of null (reading 'getContext')"
    );
  });

  it('should handle missing sliders gracefully', () => {
    document.body.innerHTML = `
      <canvas id="canvasId" width="500" height="500"></canvas>
    `;
    view = new LissajousView('canvasId');
    expect(view.getSliders()).toHaveLength(0);
  });

  it('should handle missing value displays gracefully', () => {
    document.body.innerHTML = `
      <canvas id="canvasId" width="500" height="500"></canvas>
    `;
    view = new LissajousView('canvasId');
    expect(view.getValueDisplays()).toHaveLength(0);
  });

  it('should clear the canvas before rendering', () => {
    const mockClearRect = jest.spyOn(view.getContext(), 'clearRect');
    view.render({ freqA: 1, freqB: 2, phi: 0, amplitudeX: 100, amplitudeY: 100 });
    expect(mockClearRect).toHaveBeenCalledWith(0, 0, 500, 500);
  });

  it('should clear the canvas before updating', () => {
    const mockClearRect = jest.spyOn(view.getContext(), 'clearRect');
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });
    view.update({ freqA: 1, freqB: 2, phi: 0, amplitudeX: 100, amplitudeY: 100 });
    expect(mockClearRect).toHaveBeenCalledWith(0, 0, 500, 500);
  });
});