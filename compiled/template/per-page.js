'use strict';

module.exports = function (h, that) {

  var perpageValues = require('./per-page-values')(h, that);

  if (perpageValues.length > 1) {
    var id = 'VueTables__limit_' + that.id;
    return h(
      'div',
      { 'class': 'field VueTables__limit is-pulled-right has-addons' },
      [h(
        'p',
        { 'class': 'control' },
        [h(
          'a',
          { 'class': 'button is-static' },
          [that.display('limit')]
        )]
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