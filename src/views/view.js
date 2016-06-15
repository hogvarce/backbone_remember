import Person from '../models/person.js';

const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const template = (template) => {
    return _.template($('#'+template).html());
};

const View = Backbone.View.extend({
    model: Person,
    tagName: "li",
    template: template('person'),
    initialize: function(){
        _.bindAll(this, 'render', 'changeItem' );
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    },
    events: {
        'click button#edit': 'changeItem',
        'click button#delete': 'deleteItem'
    },
    changeItem: function(){
        let newitem = prompt("Новый текст", this.model.get('name'));
        this.model.set('name', newitem, {validate:true});
    },
    remove: function(){
        this.$el.remove();
    },
    deleteItem: function(){
        if (confirm("Вы уверены?")) {
            this.model.destroy();
        }
    }
});

export default View;
