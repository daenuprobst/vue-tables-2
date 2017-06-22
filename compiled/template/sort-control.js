'use strict';

module.exports = function (h, that) {
  return function (column) {

    if (!that.sortable(column)) return '';
    return h(
      'span',
      { 'class': 'VueTables__sort-icon icon is-small' },
      [h(
        'i',
        { 'class': that.sortableChevronClass(column) },
        []
      )]
    );
  }.bind(that);
};