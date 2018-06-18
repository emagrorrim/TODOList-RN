import React, { Component } from 'react';
import { Text, View, Switch, Button } from 'react-native';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  updateTask(completed) {
    this.props.task.completed = completed;
    this.props.updateTask(this.props.task);
  }

  deleteTask() {
    this.props.deleteTask(this.props.task);
  }

  render() {
    const task = this.props.task;
    return (
      <View>
        <Switch value={this.props.task.completed} onValueChange={this.updateTask}/>
        <Text>{"title:" + task.title}</Text>
        <Button title={"X"} onPress={this.deleteTask} />
      </View>
    )
  }
}