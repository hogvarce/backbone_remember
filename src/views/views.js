import View from './view.js';

const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const Views = Backbone.View.extend({
    tagName: "ul",
    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(item){
        item.on('invalid',function(model, error){
            alert(error);
        })
        let view = new View({model: item});

        this.$el.append(view.render().el);
        return this;
    }
});

export default Views;
