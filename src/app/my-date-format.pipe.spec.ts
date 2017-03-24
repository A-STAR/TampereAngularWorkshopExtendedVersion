import { MyDateFormatPipe } from './my-date-format.pipe';

describe('MyDateFormatPipe', () => {

  let pipe;
  beforeEach(() => {
    pipe = new MyDateFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format the date correctly', () => {
    const result = pipe.transform('2017-03-23', 'd.M.yyyy');
    const expected = "23.3.2017";
    expect(result).toBe(expected);
  });

  it('number as input', () => {
    const result = pipe.transform(12, 'd.M.yyyy');
    const expected = "";
    expect(result).toBe(expected);
  });

  it('array as an input', () => {
    const result = pipe.transform([], 'd.M.yyyy');
    const expected = "";
    expect(result).toBe(expected);
  });

  it('undefined as an input', () => {
    const result = pipe.transform(undefined, 'd.M.yyyy');
    const expected = "";
    expect(result).toBe(expected);
  });
});
