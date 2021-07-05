import runeService from '../../src/services/runes';

describe('Rune service tests', () => {
  test('Transforms content to Younger Futhark', () => {
    const result = runeService.toYoungerFuthark('test content');

    expect(result).toBe('ᛏᛁᛋᛏ:ᛋᚢᚾᛏᛁᚾᛏ');
  });

  test('Transforms content to Elder Futhark', () => {
    const result = runeService.toElderFuthark('test content');

    expect(result).toBe('ᛏᛖᛋᛏ:ᚲᛟᚾᛏᛖᚾᛏ');
  });

  test('Transforms content to Futhorc', () => {
    const result = runeService.toFuthorc('test content');

    expect(result).toBe('ᛏᛖᛋᛏ:ᚳᚩᚾᛏᛖᚾᛏ');
  });
});
