import { logicalProperty } from '../utils';

export default [
  [
    'display',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'grid',
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-template',
    'grid-template-areas',
    'grid-template-rows',
    'grid-template-columns',
    'grid-gap',
    'grid-row-gap',
    'grid-column-gap',
    'gap',
    'row-gap',
    'column-gap',
    'place-content',
    'place-items',
    'place-self',
    'justify-content',
    'justify-items',
    'justify-self',
    'align-content',
    'align-items',
    'align-self',
    'float',
    'clear',
  ],
  [
    'width',
    'height',
    'min-width',
    'max-width',
    'min-height',
    'max-height',

    ...logicalProperty('margin'),
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',

    ...logicalProperty('padding'),
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',

    'box-sizing',
  ],
];
