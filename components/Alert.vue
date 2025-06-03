<template>
  <div>
    <!-- Button that triggers the alert -->
    <button @click="showAlert">Show Alert</button>
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    showAlert() {
      alert(this.content); // Show content in an alert box
    }
  }
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
