<template>
  <div>
    <h3>Todos</h3>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: {
    ...mapGetters(["allTodos"]),
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;
}

li {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>