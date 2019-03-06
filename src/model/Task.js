export default class Task {
  constructor(title, id = Task._ID(), completed = false) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }

  static _ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}