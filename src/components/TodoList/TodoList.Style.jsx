import React from 'react';
import {StyleSheet} from 'react-native';

const TodoListStyle = StyleSheet.create({
  todo: {
    backgroundColor: '#7da453',
    margin: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
  doneTodo: {
    backgroundColor: '#37474f',
    margin: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
  todoText: {
    color: 'white',
    fontSize: 16,
  },
  doneTodoText: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
});

export default TodoListStyle;
