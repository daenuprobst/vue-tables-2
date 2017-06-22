'use strict';

module.exports = function (h, that) {

  if (!that.opts.filterable) return '';

  var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

  if (that.opts.filterable && !that.opts.filterByColumn) {
    var id = 'VueTables__search_' + that.id;
    return h(
      'div',
      { 'class': 'field VueTables__search' },
      [h(
        'p',
        { 'class': 'control' },
        [h(
          'input',
          { 'class': 'input',
            attrs: { type: 'text',
              value: that.query,
              placeholder: that.display('filterPlaceholder'),

              id: id
            },
            on: {
              'keyup': search
            }
          },
          []
        )]
      )]
    );
  }

  return '';
};