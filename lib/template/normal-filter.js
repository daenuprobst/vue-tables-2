  module.exports = function(h, that) {

    if (!that.opts.filterable) return '';

    var search = that.source=='client'?
                that.search.bind(that, that.data):
                that.serverSearch.bind(that);

  if (that.opts.filterable && !that.opts.filterByColumn) {
      var id = 'VueTables__search_' + that.id;
      return <div class="field VueTables__search">
      <p class="control">
      <input class="input"
      type="text"
      value={that.query}
      placeholder={that.display('filterPlaceholder')}
      on-keyup={search}
      id={id}
      />
      </p>
      </div>
    }

    return '';
  }
