import React, { Component } from 'react';
import { View, TextInput, Button, ListView } from 'react-native';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { addTask, deleteTask, updateTask } from '../actions'
import Task from '../model/Task';

const constants = {
  newTaskPlaceholder: "What needs to be done?",
  addButtonTitle: "ADD"
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  addTask() {
    if (!this.state.title) {
      return
    }
    const task = new Task(this.state.title);
    this.props.addTask(task);
    this.newTaskInput.blur();
    this._clearTextInput();
  }

  _clearTextInput() {
    this.setState({
      title: undefined
    })
  }

  onChangeText(text) {
    this.setState({
      title: text
    })
  }

  render() {
    return (
      <View>
        <TextInput 
          placeholder={constants.newTaskPlaceholder} 
          onChangeText={this.onChangeText}
          value={this.state.title}
          ref={(ref) => this.newTaskInput = ref} 
        />
        <Button title={constants.addButtonTitle} onPress={this.addTask}/>
        <ListView 
          enableEmptySections={true}
          dataSource={this.state.dataSource.cloneWithRows(this.props.tasks)}
          renderRow={ (task) => 
            <TodoListItem 
              task={task} 
              updateTask={this.props.updateTask} 
              deleteTask={this.props.deleteTask}
            /> 
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todo
  }
}

export default connect(mapStateToProps, { addTask, deleteTask, updateTask })(TodoList);
