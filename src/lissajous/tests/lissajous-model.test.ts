import { LissajousModel } from '../src/lissajous-model';

describe('LissajousModel', () => {
  let model: LissajousModel;

  beforeEach(() => {
    model = new LissajousModel();
  });

  it('should initialize with default parameters', () => {
    const params = model.getParameters();
    expect(params).toEqual({
      freqA: 3,
      freqB: 2,
      phi: Math.PI / 2,
      amplitudeX: 300,
      amplitudeY: 200,
    });
  });

  it('should update parameters correctly', () => {
    model.updateParameter(1, 5);
    model.updateParameter(2, 4);
    const params = model.getParameters();
    expect(params.freqA).toBe(5);
    expect(params.freqB).toBe(4);
  });

  it('should calculate points correctly', () => {
    const points = model.calculatePoints(10, 200, 200);
    expect(points.length).toBe(11);
  });
});
