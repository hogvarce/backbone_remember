import App  from './app.js';
import Person from './models/person.js';
import Persons from './models/persons.js';
import Views from './views/views.js';

const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');


let persons = new Persons([{name:'adsa22d'}, {name:'adsad'}, {name:'adsad'}],{
    model: Person
});

let views = new Views({collection: persons});

$(document).ready(() => {

    $('main').append(views.render().el);

});
