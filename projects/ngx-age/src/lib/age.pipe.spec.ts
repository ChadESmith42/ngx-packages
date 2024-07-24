import { AgePipe } from './age.pipe';

describe('AgePipe', () => {
  let pipe: AgePipe;

  beforeEach(() => {
    pipe = new AgePipe;
  });

  describe('Date object tests', () => {
    it('returns a valid age when provided a valid past date', () => {
      const birthDate = new Date(1999, 5, 21); // June 21, 1999
      const age = pipe.transform(birthDate);

      expect(age).toBeGreaterThan(25);
    });
    it('returns a zero when the date is in the future', () => {
      const birthDate = new Date(2999, 5, 21); // June 21, 2999
      const age = pipe.transform(birthDate);

      expect(age).toBe(0);
    });
  });
  describe('String object tests', () => {
    it('returns a valid age when provided a valid string date in the past', () => {
      const birthDate = '6/21/1999'; // June 21, 1999
      const age = pipe.transform(birthDate);

      expect(age).toBeGreaterThan(25);
    });
    it('returns a zero when the string date is in the future', () => {
      const birthDate = '6/21/2999'; // June 21, 2999
      const age = pipe.transform(birthDate);

      expect(age).toBe(0);
    });
    it('returns a zero when the string date is invalid', () => {
      const birthDate = '14/5/1999'; // invalid date
      const age = pipe.transform(birthDate);

      expect(age).toBe(0);
    })
  });
});
