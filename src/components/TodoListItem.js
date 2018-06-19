import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';

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
      <View style={styles.bg}>
        <Switch style={styles.switch} value={task.completed} onValueChange={this.updateTask}/>
        <Text style={styles.title}>{task.title}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={this.deleteTask}>
          <Text style={styles.deleteButtonTitle}>{"X"}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    alignContent: 'center', flexDirection: 'row', backgroundColor: 'white', marginLeft: 10, marginRight: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: { 
      width: 2, 
      height: 5
    }
  },
  switch: {
    flex: 1
  },
  title: {
    flex: 3,
    lineHeight: 60,
    fontSize: 18,
    fontWeight: '300'
  },
  deleteButton: {
    flex: 1
  },
  deleteButtonTitle: {
    lineHeight: 60,
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.75)'
  }
})
