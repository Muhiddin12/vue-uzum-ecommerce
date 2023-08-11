<template>
  <h2>This is a Header Component</h2>
  <ol>
    <li v-for="dev in devs" :key="dev.id">
      <router-link :to="{ name: 'devDetails', params: { id: dev.id } }">
        {{ dev.name }}, {{ dev.job }}
      </router-link>
    </li>
  </ol>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      devs: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:3000/users");
    let users = await response.data;
    this.devs = users;
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
