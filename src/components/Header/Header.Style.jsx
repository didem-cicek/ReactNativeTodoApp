import React from 'react';
import {StyleSheet} from 'react-native';

const HeaderStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    margin: 10,
    fontSize: 34,
    color: '#ffa500',
    fontWeight: 'bold',
  },
  countTodo: {
    fontSize: 34,
    color: '#ffa500',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default HeaderStyle;
