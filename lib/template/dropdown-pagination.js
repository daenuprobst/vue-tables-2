module.exports = function(h, that) {

    if (that.opts.pagination && that.opts.pagination.dropdown) {

    var pages = [];
    var selected;

    for (var pag=1; pag<=that.totalPages; pag++) {
      var selected = that.page==pag;
      pages.push(<option value={pag} selected={selected}>{pag}</option>)
    }

    var id = 'VueTables__dropdown-pagination_' + that.id;
    return <div class="field pull-right VueTables__dropdown-pagination"
                v-show={that.totalPages>1}
                >
    <label for={id} class="label">{that.display('page')}</label>
    <p class="control">
    <span class="select">
    <select class="form-control"
    name="page"
    ref="page"
    value={that.page}
    on-change={that.setPage.bind(that, null)}
    id={id}
    >
    {pages}
    </select>
    </span>
    </p>
    </div>
    }

    return '';

}
