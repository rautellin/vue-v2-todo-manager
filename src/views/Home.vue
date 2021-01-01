<template>
  <div>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: mapState({
    // arrow functions can make the code very succinct!
    user: (state) => state.user,
  }),
  components: {
    Todos,
    AddTodo,
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