import runeService from '../../src/services/runes';

describe('Rune service tests', () => {
  test('Transforms content to Younger Futhark', () => {
    const result = runeService.toYoungerFuthark('test content');

    expect(result).toBe('ᛏᛁᛋᛏ:ᛋᚢᚾᛏᛁᚾᛏ');
  });
});
