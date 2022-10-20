import React, {useState} from 'react';
import {View, FlatList, Alert, StyleSheet} from 'react-native';
import TodoData from './todoData.json';
import Todo from './components/TodoList/TodoList';
import Input from './components/Input/Input';
import Header from './components/Header/Header';

const App = () => {
  const [todos, setTodos] = useState(TodoData);
  const [text, setText] = useState('');
  const renderTodo = ({item}) => (
    <Todo todos={item} changeIsDone={isDoneChange} deleteTodo={deleteTodo} />
  );

  const handleAddTodo = () => {
    if (text === '') return Alert.alert('Boş bırakamazsınız!');
    setTodos([
      ...todos,
      {name: text, isDone: false, id: Date.now() + Math.random()},
    ]);
    setText('');
  };

  const isDoneChange = id => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  const deleteTodo = id => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <View style={styles.container}>
      <Header todos={todos} />
      <View style={styles.innerContainer}>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
      <Input setText={setText} text={text} handleAddTodo={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#102027',
  },
  innerContainer: {
    flex: 1,
  },
});

export default App;
