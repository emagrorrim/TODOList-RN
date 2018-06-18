export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      return [action.payload.task, ...state];
    case 'DELETE':
      return state.filter((task) => task.id !== action.payload.task.id)
    case 'UPDATE':
      state.forEach((task) => {
        if (task.id === action.payload.task.id) {
          task.completed = action.payload.task.completed;
        }
      });
      return [...state]
    default:
      return state
  }
}
