import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "Welcome to Vue Tasks", isCompleted: false},
      {id: 2, title: "No Database, this is just for examples", isCompleted: true}
    ]
  }),
  getters: {
    completed() {
      return this.tasks.filter(t => t.isCompleted)
    }
  },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id
      })
    },
    completeTask(id) {
      const task = this.tasks.find(t => t.id === id)
      return task.isCompleted = ! task.isCompleted
    }

  }
})

