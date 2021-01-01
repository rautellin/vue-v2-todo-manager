<template>
  <div>
    <h1>Home</h1>
    <HelloWorld v-bind:msg="`Welcome to your Vue.js App ${user}`" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: mapState({
    // arrow functions can make the code very succinct!
    user: (state) => state.user,
  }),
  components: {
    HelloWorld,
  },
};
</script>