import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

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
        <CheckBox 
          containerStyle={styles.checkbox} 
          checked={task.completed} 
          onPress={() => this.updateTask(!task.completed)}
        />
        <Text style={styles.title}>{task.title}</Text>
        <CheckBox
          iconRight
          containerStyle={styles.deleteButton} 
          checked={true}
          iconType='material'
          checkedIcon='clear'
          checkedColor='red'
          onPress={this.deleteTask}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    alignContent: 'center', 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    marginLeft: 10, 
    marginRight: 10,
    borderBottomColor: '#e1e8ee',
    borderBottomWidth: 0.5,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: { 
      width: 2, 
      height: 5
    }
  },
  checkbox: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  title: {
    flex: 8,
    lineHeight: 60,
    fontSize: 18,
    fontWeight: '300'
  },
  deleteButton: {
    flex: 2,
    borderWidth: 0,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  deleteButtonTitle: {
    lineHeight: 60,
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.75)'
  }
})
