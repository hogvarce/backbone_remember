const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const Person = Backbone.Model.extend({
    default: {
        name: "Unknown"
    },
    validate: function(attrs, options) {
        if ( ! $.trim(attrs.name)  ) {
          return "Имя должно быть задано!";
        }
      }
});

export default Person
