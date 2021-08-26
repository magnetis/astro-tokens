import StyleDictionaryPackage from 'style-dictionary';

import config from './src/config';
import formats from './src/formats';
import transforms from './src/transforms';

function getStyleDictionaryConfig() {
  return {
    source: ['tokens/*.json'],
    platforms: {
      astro: {
        transformGroup: 'styled',
        buildPath: 'lib/',
        files: [
          ...config.borders,
          ...config.colors,
          ...config.radius,
          ...config.shadows,
          ...config.sizes,
          ...config.typography,
        ],
      },
    },
  };
}

// Overrides
StyleDictionaryPackage.registerFormat(formats.jsES6);
StyleDictionaryPackage.registerFormat(formats.tsES6Declarations);

// Custom formats
StyleDictionaryPackage.registerFormat(formats.fontCssValues);
StyleDictionaryPackage.registerFormat(formats.fontCssTypes);
StyleDictionaryPackage.registerFormat(formats.shadowStyled);
StyleDictionaryPackage.registerFormat(formats.shadowTypes);
StyleDictionaryPackage.registerFormat(formats.tsPrimitiveDeclarations);
StyleDictionaryPackage.registerFormat(formats.tsModuleFlatDeclarations);

StyleDictionaryPackage.registerTransform(transforms.itemSubitemCamel);
StyleDictionaryPackage.registerTransform(transforms.typeItemCamel);

StyleDictionaryPackage.registerTransformGroup({
  name: 'styled',
  transforms: [
    'attribute/cti',
    'name/ti/camel',
    'name/type-item/camel',
    'name/item-subitem/camel',
    'color/css',
  ],
});

const StyleDictionary = StyleDictionaryPackage.extend(
  getStyleDictionaryConfig()
);

StyleDictionary.buildAllPlatforms();
