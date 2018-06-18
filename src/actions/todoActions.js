export const addTask = (task) => {
  return {
    type: 'ADD',
    payload: {
      task: task
    }
  }
}

export const deleteTask = (task) => {
  return {
    type: 'DELETE',
    payload: {
      task: task
    }
  }
}

export const updateTask = (task) => {
  return {
    type: 'UPDATE',
    payload: {
      task: task
    }
  }
}
