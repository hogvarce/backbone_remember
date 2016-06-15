const addTaskView = Backbone.View.extend({
    el: '#addTask',
    events: {
        'submit': 'addTask'
    },
    addTask: function(e){
        e.preventDefault();
        let newTask = this.$el.find('input[name="task"]').val();
        this.collection.add(new Backbone.Model({name: newTask}));
    }
});

export default addTaskView;
