import type { Token } from '../types';

import {
  camelCase,
  getStaticType,
  isBorderToken,
  isBorderRadiusToken,
  isShadowToken,
  isTypographyToken,
} from '../helpers';

describe('helpers', () => {
  describe('camelCase', () => {
    it('returns string in camel case style', () => {
      expect(camelCase('teste')).toBe('teste');
      expect(camelCase('teste-online')).toBe('testeOnline');
      expect(camelCase('teste_online')).toBe('testeOnline');
      expect(camelCase('testeOnline')).toBe('testeOnline');
      expect(camelCase('TesteOnline')).toBe('testeOnline');
    });
  });

  describe('getStaticType', () => {
    it('returns type when token type is static', () => {
      const options = {
        isStaticType: true,
      };
      expect(getStaticType('whatever', options)).toBe('whatever');
    });

    it('returns string when token type is static and token is color', () => {
      const options = {
        isStaticType: true,
      };
      expect(getStaticType('color', options)).toBe('string');
    });

    it('returns type when token type is not static', () => {
      expect(getStaticType('color', {})).toBe('color');
    });

    it('returns string when token type is invalid', () => {
      expect(getStaticType('', {})).toBe('string');
    });
  });

  describe('isBorderToken', () => {
    it('returns true when token category is borders', () => {
      const token = {
        attributes: {
          category: 'borders',
        },
        value: 0,
      } as Token;
      expect(isBorderToken(token)).toBe(true);
    });

    it('returns false when token category is different than borders', () => {
      const token = {
        attributes: {
          category: 'another',
        },
        value: 0,
      } as Token;
      expect(isBorderToken(token)).toBe(false);
    });
  });

  describe('isBorderRadiusToken', () => {
    it('returns true when token category is borders', () => {
      const token = {
        attributes: {
          category: 'radii',
        },
        value: 0,
      } as Token;
      expect(isBorderRadiusToken(token)).toBe(true);
    });

    it('returns false when token category is different than borders', () => {
      const token = {
        attributes: {
          category: 'another',
        },
        value: 0,
      } as Token;
      expect(isBorderRadiusToken(token)).toBe(false);
    });
  });

  describe('isShadowToken', () => {
    it('returns true when token category is effect and type is shadow', () => {
      const token = {
        attributes: {
          category: 'effect',
          type: 'shadow',
        },
        value: 0,
      } as Token;
      expect(isShadowToken(token)).toBe(true);
    });

    it('returns false when token category is different than effect', () => {
      const token = {
        attributes: {
          category: 'another',
        },
        value: 0,
      } as Token;
      expect(isShadowToken(token)).toBe(false);
    });

    it('returns false when token category is effect and type is different than shadow', () => {
      const token = {
        attributes: {
          category: 'effect',
          type: 'another',
        },
        value: 0,
      } as Token;
      expect(isShadowToken(token)).toBe(false);
    });
  });

  describe('isTypographyToken', () => {
    it('returns true when token type is equal subitem', () => {
      const token = {
        attributes: {
          type: 'token_type',
          subitem: 'tokenType',
        },
        value: 0,
      } as Token;
      expect(isTypographyToken(token)).toBe(true);
    });

    it('returns false when token category is effect and type is different than shadow', () => {
      const token = {
        attributes: {
          type: 'token_type',
          subitem: 'tokenSubType',
        },
        value: 0,
      } as Token;
      expect(isTypographyToken(token)).toBe(false);
    });
  });
});
