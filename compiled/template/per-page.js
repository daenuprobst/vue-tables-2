'use strict';

module.exports = function (h, that) {

  var perpageValues = require('./per-page-values')(h, that);

  if (perpageValues.length > 1) {
    var id = 'VueTables__limit_' + that.id;
    return h(
      'div',
      { 'class': 'field VueTables__limit' },
      [h(
        'label',
        {
          attrs: { 'for': id },
          'class': 'label' },
        [that.display('limit')]
      ), h(
        'p',
        { 'class': 'control' },
        [h(
          'span',
          { 'class': 'select' },
          [h(
            'select',
            {
              attrs: { name: 'limit',
                value: that.limit,

                id: id
              },
              on: {
                'change': that.setLimit.bind(that)
              }
            },
            [perpageValues]
          )]
        )]
      )]
    );
  }

  return '';
};