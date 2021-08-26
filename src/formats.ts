import StyleDictionaryPackage from 'style-dictionary';
import type { FileHeaderArgs, Format, Token } from './types';

import { isTypographyToken, getStaticType } from './helpers';
const { fileHeader } = StyleDictionaryPackage.formatHelpers;
const SHADOW_TOKEN_FILTER = ['type', 'spread'];
const SHADOW_TOKEN_ELEVATION_MAP = {
  tight: 3,
  medium: 6,
  distant: 12,
  loose: 20,
};

// Overrides

const jsES6: Format = {
  name: 'javascript/es6',
  formatter: function ({ dictionary, file }) {
    return (
      fileHeader({ file } as FileHeaderArgs) +
      dictionary.allTokens
        .map(function (token) {
          return `export const ${token.name} = ${JSON.stringify(token.value)};`;
        })
        .join('\n')
    );
  },
};

const tsES6Declarations: Format = {
  name: 'typescript/es6-declarations',
  formatter: function ({ dictionary, file, options }) {
    return (
      fileHeader({ file } as FileHeaderArgs) +
      dictionary.allTokens
        .map(function (token) {
          const tokenType = getStaticType(token.type, options);
          return `export const ${token.name}: ${tokenType};`;
        })
        .join('\n')
    );
  },
};

// Custom formats

const fontCssValues: Format = {
  name: 'font/css',
  formatter: function ({ dictionary, file }) {
    return (
      fileHeader({ file } as FileHeaderArgs) +
      dictionary.allTokens
        .filter(isTypographyToken)
        .map((token) => `export const ${token.name} = ${JSON.stringify(token.value)};`)
        .join('\n')
    );
  },
};

const fontCssTypes: Format = {
  name: 'font/ts-declarations',
  formatter: function ({ dictionary, file, options }) {
    return (
      fileHeader({ file } as FileHeaderArgs) +
      dictionary.allTokens
        .filter(isTypographyToken)
        .map((token) => {
          const tokenType = getStaticType(token.type, options);
          return `export const ${token.name}: ${tokenType};`;
        })
        .join('\n')
    );
  },
};

const shadowStyled: Format = {
  name: 'shadow/styled',
  formatter: function ({ dictionary, file }) {
    const shadowObj: { [key: string]: any } = {};

    dictionary.allTokens
      .filter((token) => !SHADOW_TOKEN_FILTER.includes(token!.attributes!.subitem!))
      .forEach(function (token) {
        const key = token!.attributes!.item!;
        const name = `${token!.attributes!.subitem}${(token!.attributes!.state || '').toUpperCase()}`;

        shadowObj[key] = Object.assign({}, shadowObj[key], {
          [name]: token.value,
        });
      });

    Object.keys(shadowObj).forEach((key) => {
      const item = shadowObj[key];
      item.value = `${item.offsetX}px ${item.offsetY}px ${item.radius}px 0 ${item.color}`;
      item.elevation = SHADOW_TOKEN_ELEVATION_MAP[key as keyof typeof SHADOW_TOKEN_ELEVATION_MAP];
    });

    const output = JSON.stringify(shadowObj, null, 2);

    return fileHeader({ file } as FileHeaderArgs) + `module.exports = ${output};`;
  },
};

const shadowTypes: Format = {
  name: 'shadow/types',
  formatter: function ({ dictionary, file, options }) {
    const { moduleName = 'tokens' } = options;
    const typesObj: { [key: string]: any } = {};

    dictionary.allTokens
      .filter((token) => !SHADOW_TOKEN_FILTER.includes(token!.attributes!.subitem!))
      .forEach(function (token) {
        const key = token!.attributes!.item!;
        const name = `${token!.attributes!.subitem}${(token!.attributes!.state || '').toUpperCase()}`;
        const tokenType = getStaticType(token.type, options);

        typesObj[key] = Object.assign({}, typesObj[key], {
          [name]: tokenType,
        });
      });

    Object.keys(typesObj).forEach((key) => {
      const item = typesObj[key];
      item.value = 'string';
      item.elevation = 'number';
    });

    const result = JSON.stringify(typesObj, null, 2).replace(/"/g, '');

    const output = [`export default ${moduleName};`, `declare const ${moduleName}: ${result};`];

    return fileHeader({ file } as FileHeaderArgs) + output.join('\n');
  },
};

const tsModuleFlatDeclarations: Format = {
  name: 'typescript/module-flat-declarations',
  formatter: function ({ dictionary, file, options }) {
    const { moduleName = 'tokens' } = options;
    const tokens = dictionary.allTokens
      .map((token) => ({ name: token.name, type: token.type }))
      .reduce((acc, token) => {
        acc[token.name] = token.type;
        return acc;
      }, {} as Token);

    const result = JSON.stringify(tokens, null, 2).replace(/"/g, '');

    const output = [`export default ${moduleName};`, `declare const ${moduleName}: ${result};`];

    // JSON stringify will quote strings, because this is a type we need
    // it unquoted.
    return fileHeader({ file } as FileHeaderArgs) + output.join('\n').replace(/"DesignToken"/g, 'DesignToken');
  },
};

const tsPrimitiveDeclarations: Format = {
  name: 'typescript/primitive-declarations',
  formatter: function ({ dictionary, file, options }) {
    return (
      fileHeader({ file } as FileHeaderArgs) +
      dictionary.allTokens
        .map(function (token) {
          const tokenType = getStaticType(token.type, options);
          return `export const ${token.name}: ${tokenType};`;
        })
        .join('\n')
    );
  },
};

export default {
  jsES6,
  tsES6Declarations,
  fontCssValues,
  fontCssTypes,
  shadowStyled,
  shadowTypes,
  tsPrimitiveDeclarations,
  tsModuleFlatDeclarations,
};
