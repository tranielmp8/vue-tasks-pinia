<template>
  <div class="task-container" >
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <label >Add Task:</label>
        <input class="task-input" type="text" v-model="newTask">
        <button class="btn" @click="addTask" >Add</button>
      </form>
    </div>
    <nav class="filter">
      <div class="completed-filter" >
        <button @click="filter = 'all'" >All Tasks</button>
        <button @click="filter = 'completed'" >Completed Tasks</button>
      </div>
    </nav>
    <div class="task-container" v-if="filter === 'all'" >
      <div v-for="task in taskStore.tasks" :key="task.id" >
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-container" v-if="filter === 'completed'" >
      <div v-for="task in taskStore.completed" :key="task.id" >
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
import TaskDetails from '../components/TaskDetails.vue'
  export default {
    components: { TaskDetails },
    setup() {
      const taskStore = useTaskStore()
      const filter = ref('all')
      const newTask = ref('')

      const handleSubmit = () => {
        if(newTask.value.length > 0){
          taskStore.addTask({
            title: newTask.value,
            isCompleted: false,
            id: Math.floor(Math.random() * 10000)
          })
          newTask.value = ''
        }
      }
      
      return { taskStore, filter, handleSubmit, newTask }
    }
  }
</script>

<style >

</style>