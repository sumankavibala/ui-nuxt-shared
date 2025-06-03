<template>
  <div>
    <!-- Button that triggers the alert -->
    <button @click="showAlert">Show Alert</button>
  </div>
</template>

<script setup>
// Import `ref` and `defineProps` from Vue Composition API
import { defineProps } from 'vue'

// Define props with `defineProps` (Content to show in alert)
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

// Method to show the alert
const showAlert = () => {
  alert(props.content)
}
</script>

<style scoped>
button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
