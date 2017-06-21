"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h, that) {

      var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

      return function (column) {
            var _h;

            return h(
                  "input",
                  (_h = {
                        "class": "input",
                        on: {
                              "keyup": search
                        }
                  }, _defineProperty(_h, "class", "form-control"), _defineProperty(_h, "attrs", {
                        name: 'vf__' + column,
                        type: "text",
                        placeholder: that.display('filterBy', { column: that.getHeading(column) }),
                        value: that.query[column]
                  }), _h),
                  []
            );
      };
};