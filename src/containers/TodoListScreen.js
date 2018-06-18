import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

import TodoList from '../components/TodoList'

export default class TodoListScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>TODOLIST</Text>
        <TodoList/>
      </SafeAreaView>
    )
  }
}