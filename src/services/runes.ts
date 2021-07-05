import { lettersToRunes } from 'younger-futhark';

export const toYoungerFuthark = (content: string) : string => lettersToRunes(content);

export default {
  toYoungerFuthark,
};
