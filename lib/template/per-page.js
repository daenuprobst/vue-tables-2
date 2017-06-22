module.exports = function(h, that) {

  var perpageValues = require('./per-page-values')(h, that);

  if (perpageValues.length > 1) {
    var id = 'VueTables__limit_' + that.id;
    return  <div class="field VueTables__limit is-pulled-right has-addons">
          <p class="control">
          <a class="button is-static">{that.display('limit')}</a>
          </p>
          <p class="control">
          <span class="select">
          <select name="limit"
            value={that.limit}
            on-change={that.setLimit.bind(that)}
            id={id}
            >
            {perpageValues}
          </select>
          </span>
          </p>
        </div>
  }

  return '';
}
