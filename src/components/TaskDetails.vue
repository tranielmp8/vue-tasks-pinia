<template>
  <div
    
     class="task" 
     :class="{ active: task.isCompleted }" 
     >
    <h3> {{ task.title }} </h3>
    <div class="icons " >
      <span 
        class="material-symbols-outlined"
        @click="taskStore.completeTask(task.id)"
      >
        done
      </span>
      <span 
        class="material-symbols-outlined"
        @click="taskStore.deleteTask(task.id)"
        >
        delete
      </span>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore'
  export default {
    props: ['task'],
    setup(){
      
      const taskStore = useTaskStore()
      // const handleClick = () => {
      //   return props.task.isCompleted = !props.task.isCompleted
      // }
      
      return { taskStore }
    }
  }
</script>

<style scoped>
.active {
  color: #42b883;
  box-shadow: 10px 5px 5px #42b883;

}

</style>