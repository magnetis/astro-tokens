import { camelCase, isBorderToken, isBorderRadiusToken, isShadowToken, isTypographyToken } from './helpers';

import type { Transform, Token } from './types';

const or =
  (...fns: Transform['matcher'][]) =>
  (t: Token) =>
    fns.some((f) => f?.(t));

const isTypographyOrBorderOrRadiusToken = (token: Token): boolean =>
  or(isBorderToken, isBorderRadiusToken, isTypographyToken)(token);

const itemSubitemCamel: Transform = {
  name: 'name/item-subitem/camel',
  type: 'name',
  matcher: isShadowToken,
  transformer: function (token, options) {
    const tokenPaths = [...token.path];
    return camelCase([options?.prefix].concat(tokenPaths.slice(2, tokenPaths.length)).join(' '));
  },
};

const typeItemCamel: Transform = {
  name: 'name/type-item/camel',
  type: 'name',
  matcher: isTypographyOrBorderOrRadiusToken,
  transformer: function (token, options) {
    return camelCase([options?.prefix].concat(token.path.slice(1, token.path.length - 1)).join(' '));
  },
};

export default {
  itemSubitemCamel,
  typeItemCamel,
};
