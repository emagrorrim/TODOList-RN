import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

import TodoList from '../components/TodoList'

const constants = {
  title: "todos"
}

export default class TodoListScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>{constants.title}</Text>
        <TodoList/>
      </SafeAreaView>
    )
  }
}