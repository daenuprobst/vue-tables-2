  module.exports = function(h, that) {
    return function(column) {

      if (!that.sortable(column)) return '';
      return <span class={`VueTables__sort-icon ` + that.sortableChevronClass(column)}></span>

    }.bind(that)
  }
