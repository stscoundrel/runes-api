import youngerRunes from 'younger-futhark';
import elderRunes from 'elder-futhark';
import futhorcRunes from 'futhorc';
import futhorkRunes from 'futhork';

export const toYoungerFuthark = (content: string) : string => youngerRunes.lettersToRunes(content);
export const toElderFuthark = (content: string) : string => elderRunes.lettersToRunes(content);
export const toFuthorc = (content: string) : string => futhorcRunes.lettersToRunes(content);
export const toFuthork = (content: string) : string => futhorkRunes.lettersToRunes(content);

export default {
  toYoungerFuthark,
  toElderFuthark,
  toFuthorc,
  toFuthork,
};
