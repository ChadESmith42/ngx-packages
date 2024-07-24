import { TimeSincePipe } from './time-since.pipe';

describe('TimeSincePipe', () => {
  let pipe: TimeSincePipe;
  const SECOND: number = 1000;
  const MINUTE: number = SECOND * 60;
  const HOUR: number = MINUTE * 60;
  const DAY: number = HOUR * 24;
  const WEEK: number = DAY * 7;
  const MONTH: number = DAY * 30;
  const YEAR: number = DAY * 365;

  beforeEach(() => {
    pipe = new TimeSincePipe();
  });

  describe('Date object tests', () => {
   it('returns a few moments ago when the difference is less than a minute', () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (MINUTE * 0.5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('a few moments ago');
   });
   it(`returns 'a minute ago' when the difference is less than 2 minutes, but more than 1 minute`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (MINUTE * 1.5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('1 minute ago');
   })
  });
  it(`returns 'X minutes ago' when the difference is more than 1 minute but less than an hour`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (MINUTE * 5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('5 minutes ago');
  });
  it(`returns '1 hour ago' when the difference is between 1 hour and 2 hours`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (HOUR * 1.5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('1 hour ago');
  });
  it(`returns 'X hours ago' when the difference is between 2 hours and 1 day`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (HOUR * 23));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('23 hours ago');
  });
  it(`returns '1 day ago' when the difference is between 1 and 2 days`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (DAY * 1.99));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('1 day ago');
  });
  it(`returns 'X days ago' when the difference is between 2 days and 1 week`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (DAY * 3));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('3 days ago');
  });
  it(`returns '1 week ago' when the difference is between 7 and 14 days`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (WEEK * 1.5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('1 week ago');
  });
  it(`returns 'X weeks ago', when the difference is between 2 and 4 weeks`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (WEEK * 4));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('4 weeks ago');
  });
  it(`returns '1 month ago' when the difference is between 1 month and 2 months`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (MONTH * 1.5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('1 month ago');
  });
  it(`returns 'X months ago' when the difference is between 2 months and 1 year`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (MONTH * 11));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('11 months ago');
  });
  it(`returns '1 year ago' when the difference ie between 1 year and 2 years`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (YEAR * 1.5));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('1 year ago');
  });
  it(`returns 'X years ago' when the difference is greater than 1 year`, () => {
    const now = new Date();
    const testDate = new Date(now.getTime() - (YEAR * 50));
    const difference = pipe.transform(testDate);

    expect(difference).toBe('50 years ago');
  });
});


