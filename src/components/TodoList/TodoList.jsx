import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './TodoList.Style';

const TodoList = ({todos, changeIsDone, deleteTodo}) => {
  return (
    <View>
      <TouchableOpacity
        style={todos.isDone ? Styles.doneTodo : Styles.todo}
        onPress={() => changeIsDone(todos.id)}
        onLongPress={() => deleteTodo(todos.id)}>
        <Text style={todos.isDone ? Styles.doneTodoText : Styles.todoText}>
          {todos.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;
