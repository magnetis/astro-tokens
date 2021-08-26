export type { Options } from 'style-dictionary';
export type { FileHeaderArgs } from 'style-dictionary/types/FormatHelpers';

import type { Format, Transform, TransformedToken } from 'style-dictionary';
import type { Named } from 'style-dictionary/types/_helpers';

type NamedTransform = Named<Transform>;
type NamedFormat = Named<Format>;

export type { NamedFormat as Format };
export type { NamedTransform as Transform };
export type { TransformedToken as Token };
