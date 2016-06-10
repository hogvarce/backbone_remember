import Person from './person.js';

const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const Persons = Backbone.Collection.extend({
    collection: Person
});

export default Persons;
