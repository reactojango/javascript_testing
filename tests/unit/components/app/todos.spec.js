import React from 'react';
import { render } from '../../../helpers/rendering.js';
import App, { AddTodo, TodoList } from './setup.js';


describe('App', function() {
  describe('adding new todos', function() {
    beforeEach(function() {
      render(<App />);
    });

    it('should render the add new todo field', function() {
      expect(AddTodo).to.have.been.rendered;
    });

    it('should render the new todo', function() {
      AddTodo.props.addTodo('buy milk');

      expect(TodoList).to.have.been.renderedWith({
        todos: [{ title: 'buy milk' }]
      });
    });

    it('should trim whitespace from new todos', function() {
      AddTodo.props.addTodo('   wash car   ');

      expect(TodoList).to.have.been.renderedWith({
        todos: [{ title: 'wash car' }]
      });
    });
  });
});
