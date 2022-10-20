import React from 'react';
import {View, Text} from 'react-native';
import Style from './Header.Style';

const Header = ({todos}) => {
  const activeTodos = todos.filter(todo => !todo.isDone);
  return (
    <View style={Style.headerContainer}>
      <Text style={Style.header}>Yapılacaklar Listesi</Text>
      <Text style={Style.countTodo}>{activeTodos.length}</Text>
    </View>
  );
};

export default Header;
