  module.exports = function(h, that) {
    return function(column) {

      if (!that.sortable(column)) return '';
      return <span class={`VueTables__sort-icon icon`}>
        <i class={that.sortableChevronClass(column)}></i>
      </span>

    }.bind(that)
  }
