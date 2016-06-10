import App  from './app.js';

const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');


const template = (template) => {
    return _.template($('#'+template).html());
};




App.models.Person = Backbone.Model.extend({
    default: {
        name: "Unknown"
    },
    validate: function(attrs, options) {
        if ( ! $.trim(attrs.name)  ) {
          return "Имя должно быть задано!";
        }
      }
});

App.models.Persons = Backbone.Collection.extend({
    collection: App.models.Person
});

App.views.View = Backbone.View.extend({
    model: App.models.Person,
    tagName: "li",
    template: template('person'),
    initialize: function(){
        _.bindAll(this, 'render', 'changeItem' );
        this.model.on('change', this.render);
    },
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    },
    events: {
        'click': 'changeItem'
    },
    changeItem: function(){
        let newitem = prompt("Новый текст", this.model.get('name'));
        this.model.set('name', newitem, {validate:true});
    }
});

App.views.Views = Backbone.View.extend({
    tagName: "ul",
    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(item){
        item.on('invalid',function(model, error){
            alert(error);
        })
        let view = new App.views.View({model: item});

        this.$el.append(view.render().el);
        return this;
    }
});

let persons = new App.models.Persons([{name:'adsa22d'}, {name:'adsad'}, {name:'adsad'}],{
    model: App.models.Person
});

let views = new App.views.Views({collection: persons});

$(document).ready(() => {

    $('main').append(views.render().el);

});
