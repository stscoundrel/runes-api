import youngerRunes from 'younger-futhark';
import elderRunes from 'elder-futhark';

export const toYoungerFuthark = (content: string) : string => youngerRunes.lettersToRunes(content);
export const toElderFuthark = (content: string) : string => elderRunes.lettersToRunes(content);

export default {
  toYoungerFuthark,
  toElderFuthark,
};
