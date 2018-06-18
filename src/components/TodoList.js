import React, { Component } from 'react';
import { View, TextInput, Button, ListView } from 'react-native';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { addTask, deleteTask, updateTask } from '../actions'
import Task from '../model/Task';

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
    const task = new Task(this.state.title);
    this.props.addTask(task);
  }

  onChangeText(text) {
    this.setState({
      title: text
    })
  }

  render() {
    return (
      <View>
        <TextInput placeholder={"Please input the task title!"} onChangeText={this.onChangeText} />
        <Button title={"Add"} onPress={this.addTask}/>
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
  console.log(state);
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, { addTask, deleteTask, updateTask })(TodoList);
