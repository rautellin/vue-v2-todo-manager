<template>
  <div>
    <h1>Hi {{ name }}</h1>
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import FilterTodos from "../components/FilterTodos";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["user"]),
    name() {
      return this.$store.state.user;
    },
  },
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style scoped>
div {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>