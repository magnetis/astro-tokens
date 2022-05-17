import * as changeCase from 'change-case';
import type { Token, Options } from './types';

type TokenTypes = keyof typeof TOKEN_TYPES;
type StaticType = TokenTypes | string;

const TOKEN_TYPES = {
  color: 'string',
};

function camelCase(input: string) {
  return changeCase.camelCase(input, {
    transform: changeCase.camelCaseTransformMerge,
  });
}

function isStaticType(value?: boolean) {
  return (
    typeof value !== 'undefined' && typeof value === 'boolean' && value === true
  );
}

function getStaticType(tokenType: string, options: Options): StaticType {
  if (isStaticType(options.isStaticType)) {
    return TOKEN_TYPES[tokenType as TokenTypes] || tokenType;
  }
  return tokenType || 'string';
}

function isBorderToken(token: Token) {
  return token!.attributes!.category === 'borders';
}

function isBorderRadiusToken(token: Token) {
  return token!.attributes!.category === 'radii';
}

function isShadowToken(token: Token) {
  return (
    token!.attributes!.category === 'effect' &&
    token!.attributes!.type === 'shadow'
  );
}

function isTypographyToken(token: Token) {
  const tokenType = token!.attributes!.type!;
  const tokenSubitem = token!.attributes!.subitem;
  return camelCase(tokenType) === tokenSubitem;
}

export {
  camelCase,
  getStaticType,
  isBorderToken,
  isBorderRadiusToken,
  isShadowToken,
  isTypographyToken,
};
